import nodemailer from 'nodemailer';
import { renderToStaticMarkup } from 'react-dom/server';
import EmailTemplateForApplication from '../../../lib/personal-Information'; // Adjust the import path as needed

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Extract the form data from the request body
  const {
    mrMrs,
    firstName,
    lastName,
    homeAddress,
    correspondenceAddress,
    homePhone,
    workTelephone,
    contactAtWork,
    eligibleToWork,
    workPermitOrVisa,
    highSchoolNameAndAddress,
    highSchoolDateAttended,
    highSchoolAreaOfStudy,
    highSchoolDiploma,
    collegesTrainingSchools,
    collegeDateAttended,
    collegeAreaOfStudy,
    collegeDiploma,
    professionalTrainings,
  } = req.body;

  // Render the email content using the template
  const emailContent = renderToStaticMarkup(
    <EmailTemplateForApplication
      mrMrs={mrMrs}
      firstName={firstName}
      lastName={lastName}
      homeAddress={homeAddress}
      correspondenceAddress={correspondenceAddress}
      homePhone={homePhone}
      workTelephone={workTelephone}
      contactAtWork={contactAtWork}
      eligibleToWork={eligibleToWork}
      workPermitOrVisa={workPermitOrVisa}
      highSchoolNameAndAddress={highSchoolNameAndAddress}
      highSchoolDateAttended={highSchoolDateAttended}
      highSchoolAreaOfStudy={highSchoolAreaOfStudy}
      highSchoolDiploma={highSchoolDiploma}
      collegesTrainingSchools={collegesTrainingSchools}
      collegeDateAttended={collegeDateAttended}
      collegeAreaOfStudy={collegeAreaOfStudy}
      collegeDiploma={collegeDiploma}
      professionalTrainings={professionalTrainings}
    />
  );

  try {
    // Set up the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Use your preferred email service
      auth: {
        user: "soluwatist@gmail.com", 
        pass: "meqx zscx istz frcn", 
      },
    });

    // Send the email
    await transporter.sendMail({
      from: req.body.email, // Sender's email address
      to: 'adebayofolasade631@gmail.com',   // Replace with your recipient's email address
      subject: 'New Application Received',
      html: emailContent,
    });

    return res.status(200).json({ message: 'Application email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: `Failed to send application email: ${error.message}` });
  }
}

  