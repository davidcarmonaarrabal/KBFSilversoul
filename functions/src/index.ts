import * as functions from 'firebase-functions';
import express from 'express';
import sgMail from '@sendgrid/mail';
import cors from 'cors';


sgMail.setApiKey("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");

const app = express();
app.use(cors({ origin: true })); 

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: 'davidcarmonaarrabal@davidca.es',
        from: 'davidcarmonaarrabal@davidca.es',
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error at sending the email' });
    }
});

app.get('/', (req, res) => {
    res.send('La función está activa. Usa POST en /send-email para enviar correos.');
});

export const sendEmail = functions.https.onRequest(app);
