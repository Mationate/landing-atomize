import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email y mensaje son requeridos' },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Enviamos correo al administrador
    await resend.emails.send({
      from: 'noreply@atomize.cl',
      to: 'contacto@atomize.cl',
      subject: 'Nuevo mensaje de contacto - Atomize',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #5D5DFF;">Nuevo mensaje de contacto</h2>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
        </div>
      `,
    });
    
    // Enviamos correo de confirmación al usuario
    await resend.emails.send({
      from: 'onboarding@atomize.cl',
      to: email,
      subject: 'Gracias por contactar con Atomize',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="color: #5D5DFF;">Gracias por tu mensaje</h2>
          <p>Hemos recibido tu contacto y te responderemos a la brevedad.</p>
          <p>Este es el mensaje que nos enviaste:</p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;">${message}</p>
          <p>El equipo de Atomize</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el correo' },
      { status: 500 }
    );
  }
} 