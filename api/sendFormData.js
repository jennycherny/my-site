const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
      app.use(cors());
      app.use(express.json());

app.post('/api/sendFormData', async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received form data:', formData);

        // транспортер для отправки письма
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Параметры письма
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Сообщение с сайта-резюме',
            text: `
                Имя: ${formData.name}
                Email: ${formData.email}
                Сообщение: ${formData.message}
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Error sending email', details: error.message });
    }
});

module.exports = app;