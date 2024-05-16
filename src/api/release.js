import nodemailer from "nodemailer";
import { renderToStaticMarkup } from "react-dom/server";
import ReleaseOfInformationEmail from "../../lib/releaseTemplate";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {} = req.body;

  // Create the email content using the email template
  const emailContent = renderToStaticMarkup(
    <ReleaseOfInformationEmail
      fullName={fullName}
      signature={signatureImage}
      socialNumber={socialNumber}
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
      from: req.body.email, // Sender's email
      // to: 'adebayofolasade631@gmail.com',
      to: "info@dailycaresupport.com",

      // Recipient email for the application
      subject: "New Job Application Received",
      html: emailContent,
    });

    return res
      .status(200)
      .json({ message: "Application email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: `Failed to send application email: ${error.message}` });
  }
}
