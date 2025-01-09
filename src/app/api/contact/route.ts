import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const msg = {
      to: 'davidcarmonaarrabal@davidca.es',  // El correo al que se enviará el mensaje
      from: 'davidcarmonaarrabal@davidca.es', // El correo que configuraste en SendGrid (de tu dominio autenticado)
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `Mensaje de ${name} (${email}):\n\n${message}`,
      html: `<p>Mensaje de <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
    };

    // Enviar el correo a través de SendGrid
    await sgMail.send(msg);

    return NextResponse.json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Hubo un error al enviar el correo' }, { status: 500 });
  }
}
