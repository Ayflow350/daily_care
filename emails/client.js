import nodemailer from 'nodemailer';

const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
  auth: {
    user: 'soluwatist@gmail.com',
    pass: 'umvo fxxy edzl iuvy'
  }
});

export const mailOptions = {
    from: adminEmailFull,
    to: adminEmailFull,
};