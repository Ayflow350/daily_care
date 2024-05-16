// pages/api/referral.js

import { mailOptions, transporter } from "../../emails/client";
import { replaceMergeTags, stripHTMLTags } from "../../emails/helpers";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const data = request.body;

      // Get html template
      const htmlFilePath = path.join(process.cwd(), "emails", "referral.html");
      let htmlContent = fs.readFileSync(htmlFilePath, "utf8");

      // Replace merge tags with values
      htmlContent = replaceMergeTags(data, htmlContent);
      const plainTextContent = stripHTMLTags(htmlContent);

      // Send email
      await transporter.sendMail({
        ...mailOptions,
        subject: `New Contact Form Inquiry`,
        text: plainTextContent,
        html: htmlContent,
      });

      response.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      response.status(500).json({ error: error.message });
    }
  } else {
    response.status(405).end(); // Method Not Allowed
  }
}
