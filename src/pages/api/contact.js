import nodemailer from "nodemailer";
import { renderToStaticMarkup } from "react-dom/server";
import ContactEmailTemplate from "../../../lib/contactTemplate";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, address, email, message } = req.body;

  // Create the email content using the email template
  const emailContent = renderToStaticMarkup(
    <ContactEmailTemplate
      firstName={firstName}
      email={email}
      message={message}
      address={address}
    />
  );

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your preferred email service
      auth: {
        user: "soluwatist@gmail.com",
        pass: "meqx zscx istz frcn",
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // Sender's email
      to: "adebayofolasade631@gmail.com",
      subject: "New Referral Received",
      html: emailContent,
    });

    return res
      .status(200)
      .json({ message: "Referral email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Failed to send referral email: ${error.message}` });
  }
}
