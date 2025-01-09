import * as functions from 'firebase-functions';
import express from 'express';
import sgMail from '@sendgrid/mail';


// Configura SendGrid
sgMail.setApiKey(functions.config().sendgrid.apikey);

// Crea una instancia de Express
const app = express();

// Configura un endpoint POST para el formulario de contacto
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

// Configura el puerto y permite que Express funcione con Firebase Functions
const port = process.env.PORT || 8081;  // Cambiar 8081 a cualquier puerto libre  // Asegúrate de que está en el puerto 8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Exporta la función para que Firebase pueda ejecutarla
export const sendEmail = functions.https.onRequest(app);
