import db from "../../../lib/db";
import crypto from "crypto";
import nodemailer from "nodemailer";
import morgan from "morgan";
import { renderToStaticMarkup } from "react-dom/server"; // For converting React components to static HTML
import AWSVerifyEmail from "../../../lib/emailTemplates"; 

// Initialize Morgan logger
const morganLogger = morgan("combined");

// Function to send OTP email using a custom template
async function sendOTPEmail(email, otp) {
    console.log("Initializing nodemailer");
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "soluwatist@gmail.com", // Your Gmail address
      pass: "meqx zscx istz frcn", // Your Gmail app password
      },
    });
  
    // Generate HTML content from the email template
    const emailContent = renderToStaticMarkup(<AWSVerifyEmail verificationCode={otp} />);
  
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Verification",
      html: emailContent, // Use the generated HTML content
    };
  
    console.log("Sending OTP email");
  
    await transporter.sendMail(mailOptions);
    console.log("OTP email sent successfully");
  }
  

// API route for OTP generation
export default async (req, res) => {
  morganLogger(req, res, () => {});

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method Not Allowed",
    });
  }

  try {
    console.log("Extracting email from request");
    const { email } = req.body;

    console.log("Deleting existing OTPs for the same email");
    await db.otp.deleteMany({
      where: {
        email,
      },
    });

    console.log("Checking OTP requests in the last 24 hours");
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago
    const otpRequests = await db.otp.findMany({
      where: {
        email,
        createdAt: {
          gte: oneDayAgo,
        },
      },
    });

    if (otpRequests.length >= 3) {
      return res.status(429).json({
        message: "Maximum OTP requests reached. Please wait 24 hours before trying again.",
      });
    }

    console.log("Generating OTP");
    const otp = crypto.randomInt(100000, 999999); // 6-digit numeric OTP
    const expiry = new Date(Date.now() + 120 * 1000); // 2 minutes from now

    console.log("Storing OTP in the database");

    await db.otp.create({
      data: {
        email,
        otp,
        expiry,
        otpRequestCount: otpRequests.length + 1,
      },
    });

    console.log("Sending OTP via email");
    await sendOTPEmail(email, otp);

    return res.status(200).json({
      message: "OTP generated and sent successfully.",
    });
  } catch (error) {
    console.error("Error generating OTP:", error);
    return res.status(500).json({
      message: "An error occurred while generating OTP.",
      error: error.message,
    });
  }
};
