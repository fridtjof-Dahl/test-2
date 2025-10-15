import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Simple email sending - just log for now
    const emailData = {
      to: 'kontakt@enkelfinansiering.no',
      subject: `Ny henvendelse fra ${name}`,
      from: 'kontakt@enkelfinansiering.no',
      name,
      email,
      phone: phone || 'Ikke oppgitt',
      message,
      timestamp: new Date().toLocaleString('no-NO')
    };

    // Log the email data (in production, this would be sent via email service)
    console.log('📧 Kontaktskjema mottatt:', emailData);
    
    // For now, simulate success
    // In production, integrate with a working email service like:
    // - SendGrid
    // - Mailgun  
    // - Resend
    // - Or a webhook service like Zapier
    
    return NextResponse.json({ 
      success: true, 
      message: 'Meldingen din er mottatt! Vi kontakter deg snart.',
      data: emailData
    });

  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Noe gikk galt. Prøv igjen senere.'
    }, { status: 500 });
  }
}
