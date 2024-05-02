import db from "../../../lib/db"; // Assuming you're using Prisma for database interaction
import dayjs from 'dayjs'; // For time management


// API handler for OTP verification
export default async (req, res) => {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).json({
      message: 'Method Not Allowed',
    });
  }

  try {
    const { email, otp } = await req.body; // Extract data from the request

    // Find the OTP record for the provided email
    const otpRecord = await db.otp.findUnique({
      where: { email },
    });

    if (!otpRecord) {
      return res.status(404).json({
        message: 'OTP record not found for this email',
      });
    }

    if (otpRecord.expiry < new Date()) {
      console.log("OTP has expired. Deleting the expired OTP from the database.");
      await db.otp.delete({
        where: { id: otpRecord.id },
      });
      return res.status(400).json({
        message: 'The OTP has expired',
      });
    }

    if (otpRecord.otp !== parseInt(otp, 10)) {
      // If the OTP is invalid
      return res.status(400).json({
        message: 'Invalid OTP',
      });
    }

    // If the OTP is valid, update the user record to mark the email as verified
    const updatedUser = await db.user.update({
      where: { email },
      data: {
        emailVerified: true,
        emailVerifiedDate: dayjs().toDate(), // Record the verification date
        verificationToken: null, // Clear any token if needed
      },
    });

    // Delete the OTP record since it has been used
    await db.otp.delete({
      where: { id: otpRecord.id },
    });

    return res.status(200).json({
      message: 'Email verified successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({
      message: 'An error occurred while verifying OTP',
      error: error.message,
    });
  }
};
