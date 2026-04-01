const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Test email
transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,  // Send to yourself
    subject: 'Test Email',
    text: 'If you see this, Gmail is working!'
}, (error, info) => {
    if (error) {
        console.log('ERROR:', error.message);
    } else {
        console.log('SUCCESS! Email sent:', info.response);
    }
    process.exit();
});