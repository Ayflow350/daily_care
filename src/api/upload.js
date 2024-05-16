import cloudinary from "../utils/cloudinaryConfig";
import multer from "multer";
import { v2 as cloudinaryV2 } from "cloudinary";

const upload = multer({ dest: "uploads/" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const result = await cloudinaryV2.uploader.upload(req.body.file, {
        folder: "your_folder_name", // Optional: Specify a folder in Cloudinary
      });
      res.status(200).json({ url: result.secure_url });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ error: "Error uploading file" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
