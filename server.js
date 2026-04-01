const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const requiredEnv = ['EMAIL_USER', 'EMAIL_PASSWORD', 'RESTAURANT_EMAIL'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
    console.error('Missing required environment variables:', missingEnv.join(', '));
    process.exit(1);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure email service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Send email to restaurant
        console.log('Attempting to send email from:', process.env.EMAIL_USER);
        console.log('To:', process.env.RESTAURANT_EMAIL);
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.RESTAURANT_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h2>New Message from Tasty Website</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        // Send confirmation to user
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your message - Tasty Restaurant',
            html: `
                <h2>Thank you for contacting us!</h2>
                <p>Hi ${name},</p>
                <p>We have received your message and will get back to you as soon as possible.</p>
                <p>Best regards,<br>Tasty Restaurant Team</p>
            `
        });

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Test endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});