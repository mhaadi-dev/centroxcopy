import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com', 
    port: 465, 
    secure: true, 
    auth: {
        user: process.env.ZOHO_EMAIL_USER, 
        pass: process.env.ZOHO_EMAIL_PASS, 
    },
});

export const sendEmail = async (to: string, subject: string, text: string): Promise<void> => {
    const mailOptions = {
        from: `"Centrox AI" <${process.env.ZOHO_EMAIL_USER}>`, // Sender email
        to,
        subject,
        text,
    };

    await transporter.sendMail(mailOptions);
};
