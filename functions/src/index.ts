import * as functions from 'firebase-functions';
import express from 'express';
import sgMail from '@sendgrid/mail';
import cors from 'cors';

sgMail.setApiKey("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");

const app = express();
app.use(cors({ origin: true })); // Permitir todas las solicitudes

// Middleware para parsear JSON
app.use(express.json());

// Ruta para manejar solicitudes POST
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
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
});

// Ruta GET opcional para verificar que la función está activa
app.get('/', (req, res) => {
    res.send('La función está activa. Usa POST en /send-email para enviar correos.');
});

// Exportar la función
export const sendEmail = functions.https.onRequest(app);
