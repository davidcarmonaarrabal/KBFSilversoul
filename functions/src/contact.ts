import * as functions from 'firebase-functions';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const sendContactEmail = functions.https.onRequest(async (req, res) => {
  try {
    // Enviar correo usando SendGrid
    await sgMail.send({
      to: 'davidcarmonaarrabal@davidca.es',  // Cambia esto por el correo real
      from: 'davidcarmonaarrabal@davidca.es',    // Cambia esto por el correo real
      subject: 'Nuevo mensaje de contacto',
      text: req.body.message,          // Asumimos que el cuerpo tiene el mensaje
    });
    
    // Enviar respuesta exitosa
    res.status(200).send('Correo enviado correctamente');
  } catch (error) {
    // Enviar respuesta de error
    res.status(500).send('Hubo un error al enviar el correo');
  }
});
