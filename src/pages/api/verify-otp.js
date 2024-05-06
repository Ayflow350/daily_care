export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email: rawEmail, otp } = req.body;

    // Check for undefined or missing parameters
    if (!rawEmail) {
      return res.status(400).json({ message: 'Email is required in request body' });
    }

    const decodedEmail = decodeURIComponent(rawEmail);

    console.log("Decoded Email from request:", decodedEmail);

    // Fetch the OTP record using the decoded email
    const otpRecord = await db.otp.findUnique({
      where: { email: decodedEmail },
    });

    if (!otpRecord) {
      return res.status(404).json({
        message: 'OTP record not found for this email',
      });
    }

    // Additional checks and operations...
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({ message: 'An error occurred while verifying OTP', error: error.message });
  }
};
