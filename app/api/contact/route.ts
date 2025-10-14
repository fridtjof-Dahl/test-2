import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, generateContactEmail } from '@/lib/email';
import { FORM_CONFIG, getEmailRecipients } from '@/lib/config';
import { rateLimit } from '@/lib/rate-limit';

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

    // Generate email content
    const emailContent = generateContactEmail({ name, email, phone, message });
    
    // Get recipients from config
    const recipients = getEmailRecipients('contact');
    
    // Send email to your team
    const emailSent = await sendEmail({
      to: recipients,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    });

    // Send confirmation email to user
    if (emailSent) {
      await sendEmail({
        to: email,
        subject: 'Takk for din henvendelse - Enkel Finansiering',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #004D61;">Takk for din henvendelse!</h2>
            <p>Hei ${name},</p>
            <p>Takk for at du tok kontakt med oss. Vi har mottatt din melding og vil svare deg innen 24 timer.</p>
            <p>Hvis du har spørsmål om billån, kan du også prøve vår <a href="https://enkelfinansiering.no/kalkulator" style="color: #FF6B35;">billånskalkulator</a>.</p>
            <p>Med vennlig hilsen,<br>Teamet i Enkel Finansiering</p>
          </div>
        `,
        text: `Hei ${name},\n\nTakk for at du tok kontakt med oss. Vi har mottatt din melding og vil svare deg innen 24 timer.\n\nMed vennlig hilsen,\nTeamet i Enkel Finansiering`,
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
      recipients,
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
