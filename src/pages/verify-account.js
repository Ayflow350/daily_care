import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // To get the query parameters
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyOtp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log("Router query:", router.query); // Log the entire query object
    if (router.query.email) {
      const decodedEmail = decodeURIComponent(router.query.email);
      console.log("Extracted Email from URL:", decodedEmail);
      setEmail(decodedEmail); // Store the decoded email
    } else {
      console.log("Email not found in query.");
    }
  }, [router.query]); // React to changes in query parameters
  

  // Example function to handle OTP verification
  const handleVerifyOtp = async (otp) => {
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email, // Use the extracted email
          otp, // This would be the OTP entered by the user
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message); // Success message
      } else {
        toast.error(data.message); // Error message
      }
    } catch (error) {
      toast.error('Error verifying OTP: ' + error.message);
    }
  };

  return (
    <div>
      {/* Render your OTP verification UI here */}
      <h2>Verify Your OTP</h2>
      <p>Email: {email}</p> {/* Display the extracted email */}
      {/* Include input fields for OTP and a submit button to trigger verification */}
      {/* Example form to verify OTP */}
      <form onSubmit={(e) => {
        e.preventDefault();
        const otp = e.target.elements.otp.value; // Get OTP from form input
        handleVerifyOtp(otp); // Verify the OTP
      }}>
        <input type="text" name="otp" placeholder="Enter OTP" required />
        <button type="submit">Verify OTP</button>
      </form>

      {/* Include a ToastContainer for notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default VerifyOtp;


