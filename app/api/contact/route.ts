import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    if (!rateLimit(`contact:${clientIP}`, 5, 15 * 60 * 1000)) {
      return NextResponse.json(
        { error: 'For mange forespørsler. Prøv igjen senere.' },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Navn, e-post og melding er påkrevd' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Ugyldig e-postadresse' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Generate email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ny henvendelse - Enkel Finansiering</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 30px;">
          <h1 style="color: #333; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px;">
            Ny henvendelse mottatt
          </h1>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #666;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px;">Kontaktinformasjon</h2>
            <p style="margin: 8px 0;"><strong>Navn:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>E-post:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
            ${phone ? `<p style="margin: 8px 0;"><strong>Telefon:</strong> <a href="tel:${phone}" style="color: #0066cc; text-decoration: none;">${phone}</a></p>` : ''}
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 6px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px;">Melding</h2>
            <div style="white-space: pre-wrap; line-height: 1.8;">${message}</div>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #f9f9f9; border-radius: 6px; font-size: 14px; color: #666;">
            <p style="margin: 0;"><strong>Mottatt:</strong> ${new Date().toLocaleString('no-NO')}</p>
            <p style="margin: 5px 0 0 0;"><strong>Kilde:</strong> Enkel Finansiering - Kontaktskjema</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const emailText = `
NY HENVENDELSE MOTTATT

Kontaktinformasjon:
Navn: ${name}
E-post: ${email}
${phone ? `Telefon: ${phone}` : ''}

Melding:
${message}

Mottatt: ${new Date().toLocaleString('no-NO')}
Kilde: Enkel Finansiering - Kontaktskjema

---
Enkel Finansiering
https://enkelfinansiering.no
    `;
    
    // Send email to your team
    const emailResult = await resend.emails.send({
      from: 'Enkel Finansiering <kontakt@enkelfinansiering.no>',
      to: ['kontakt@enkelfinansiering.no'],
      subject: `Henvendelse: ${name} - ${new Date().toLocaleDateString('no-NO')}`,
      html: emailHtml,
      text: emailText,
      replyTo: email,
      headers: {
        'X-Priority': '3',
        'X-MSMail-Priority': 'Normal',
        'Importance': 'Normal',
      },
    });

    const emailSent = !!emailResult.data?.id;

    // Send confirmation email to user
    if (emailSent) {
      await resend.emails.send({
        from: 'Enkel Finansiering <kontakt@enkelfinansiering.no>',
        to: [email],
        subject: 'Takk for din henvendelse - Vi svarer innen 24 timer',
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bekreftelse - Enkel Finansiering</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 30px;">
              <h1 style="color: #333; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px;">
                Takk for din henvendelse!
              </h1>
              
              <p>Hei ${name},</p>
              
              <p>Takk for at du tok kontakt med oss. Vi har mottatt din melding og vil svare deg innen 24 timer.</p>
              
              <div style="background: #f5f5f5; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #666;">
                <h2 style="color: #333; margin-top: 0; font-size: 18px;">Hva skjer nå?</h2>
                <ul style="margin: 10px 0; padding-left: 20px;">
                  <li>Vi gjennomgår din henvendelse</li>
                  <li>Vår ekspert kontakter deg innen 24 timer</li>
                  <li>Vi gir deg personlig rådgivning</li>
                </ul>
              </div>
              
              <p>Hvis du har spørsmål om billån, kan du også prøve vår <a href="https://enkelfinansiering.no/kalkulator" style="color: #0066cc; text-decoration: none;">billånskalkulator</a> for å få en rask oversikt over kostnader.</p>
              
              <div style="margin-top: 30px; padding: 15px; background: #f9f9f9; border-radius: 6px;">
                <p style="margin: 0; font-size: 14px; color: #666;">
                  <strong>Med vennlig hilsen,</strong><br>
                  Teamet i Enkel Finansiering<br>
                  <a href="https://enkelfinansiering.no" style="color: #0066cc; text-decoration: none;">enkelfinansiering.no</a>
                </p>
              </div>
            </div>
          </body>
          </html>
        `,
        text: `Hei ${name},

Takk for at du tok kontakt med oss. Vi har mottatt din melding og vil svare deg innen 24 timer.

Hva skjer nå?
- Vi gjennomgår din henvendelse
- Vår ekspert kontakter deg innen 24 timer  
- Vi gir deg personlig rådgivning

Hvis du har spørsmål om billån, kan du også prøve vår billånskalkulator på enkelfinansiering.no/kalkulator

Med vennlig hilsen,
Teamet i Enkel Finansiering
enkelfinansiering.no`,
        headers: {
          'X-Priority': '3',
          'X-MSMail-Priority': 'Normal',
          'Importance': 'Normal',
        },
      });
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
      emailSent,
      emailId: emailResult.data?.id,
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Meldingen din er sendt! Vi kontakter deg snart.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Noe gikk galt. Prøv igjen senere.' },
      { status: 500 }
    );
  }
}
