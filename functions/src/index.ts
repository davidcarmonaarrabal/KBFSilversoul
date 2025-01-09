import * as functions from 'firebase-functions';
import express from 'express';
import sgMail from '@sendgrid/mail';

const app = express();
app.use(express.json());

// Configurar SendGrid con la API key desde Firebase Config
sgMail.setApiKey(functions.config().sendgrid.api_key);

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: 'davidcarmonaarrabal@davidca.es', // Cambia esto por tu correo de destino
        from: 'davidcarmonaarrabal@davidca.es', // Cambia esto por tu correo de remitente
        subject: 'Nuevo mensaje de contacto',
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Error al enviar el correo' });
    }
});

// Exporta la función sin necesidad de definir el puerto, Firebase lo manejará
export const sendEmail = functions.https.onRequest(app);
