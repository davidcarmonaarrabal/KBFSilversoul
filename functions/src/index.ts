import * as functions from 'firebase-functions';
import express from 'express';
import sgMail from '@sendgrid/mail';

// Accede a la clave de API de SendGrid desde las variables de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const app = express();

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: 'destinatario@example.com', // Cambia esto por tu correo de destino
        from: 'remitente@example.com',  // Cambia esto por tu correo de remitente
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

// Exporta la función para que Firebase pueda ejecutarla
export const sendEmail = functions.https.onRequest(app);
