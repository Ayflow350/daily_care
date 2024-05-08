import db from "../../../lib/db";
import bcrypt from "bcrypt";
import axios from "axios";
import morgan from "morgan";
import { redirect } from "next/dist/server/api-utils";


const morganLogger = morgan("combined"); // Log HTTP requests in detail

export default async (req, res) => {
  // Apply Morgan for logging
  morganLogger(req, res, () => {});

  if (req.method === "POST") {
    try {
      console.log("Extracting data from request");
      const { name, email, password, role } = req.body;

      console.log("Checking if email is blacklisted");
      const blacklistedUser = await db.blacklistedUser.findUnique({
        where: { email },
      });

      if (blacklistedUser) {
        console.warn(`Email ${email} is blacklisted`);
        return res.status(403).json({
          message: `Registration forbidden: The email (${email}) is blacklisted.`,
        });
      }

      console.log("Checking if user with the given email exists");
      const existingUser = await db.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        console.warn(`User with email ${email} already exists`);
        return res.status(409).json({
          message: `User with this email (${email}) already exists in the database.`,
        });
      }

      console.log("Hashing password");
      const hashedPassword = await bcrypt.hash(password, 10);

      console.log("Creating new user");
      const newUser = await db.user.create({
        data: {
          name,
          email,
          hashedPassword,
          password, // Password shouldn't be stored in plaintext
          role,
        },
      });

      console.log("Sending request to OTP API");
      const otpResponse = await axios.post(
        "https://daily-care-6y11.vercel.app/api/generate-otp",
        { email }
      );

      if (otpResponse.status === 200) {
        const redirectUrl = `/verify-account/${encodeURIComponent(email)}`;
         // Create the redirect URL
         const Mail = `${encodeURIComponent(email)}`;
        
        console.log("Redirect URL:", redirectUrl);
         // Log the URL before returning the response
         console.log(Mail)
      
        return res.status(201).json({
          message: "User registered successfully. An OTP has been sent to your email.",
          redirect: redirectUrl, // Use the defined variable
          user: newUser,
        });
        console.log(redirect)
      } else {
        throw new Error("Failed to generate OTP");
      }
    } catch (error) {
      console.error("Error during user registration:", error);
      return res.status(500).json({
        message: "An error occurred during registration.",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" }); // Handle unsupported methods
  }
};





