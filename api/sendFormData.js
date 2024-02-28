const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

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
                user: 'evchern.it@gmail.com',
                pass: 'wggk fghc vclf eubw'
            }
        });

        // Параметры письма
        const mailOptions = {
            from: 'evchern.it@gmail.com',
            to: 'evchern.it@gmail.com',
            subject: 'Сообщение с сайта-резюме',
            text: `
                Name: ${formData.name}
                Email: ${formData.email}
                Message: ${formData.message}
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Error sending email', details: error.message });
    }
});