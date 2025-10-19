import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { 
      itemPrice, 
      loanAmount, 
      loanTerm, 
      name, 
      email, 
      phone, 
      registrationNumber, 
      kilometers, 
      warranty, 
      adUrl 
    } = body;

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'registrationNumber', 'kilometers'];
    const missingFields = requiredFields.filter(field => !body[field]);
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Følgende felt er påkrevd: ${missingFields.join(', ')}` },
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

    // Validate registration number format
    const regNumberRegex = /^[A-Z]{2}\d{5}$/;
    if (!regNumberRegex.test(registrationNumber)) {
      return NextResponse.json(
        { error: 'Ugyldig registreringsnummer format' },
        { status: 400 }
      );
    }

    // Calculate loan details
    const downPayment = itemPrice - loanAmount;
    const interestRate = 0.092; // 9.2%
    const monthlyRate = interestRate / 12;
    const months = loanTerm * 12;
    const principal = Math.max(0, loanAmount);
    
    const monthlyPayment = principal > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
        (Math.pow(1 + monthlyRate, months) - 1)
      : 0;

    const applicationData = {
      // Personal info
      name,
      email,
      phone,
      
      // Loan details
      itemPrice,
      loanAmount,
      downPayment,
      loanTerm,
      monthlyPayment: Math.round(monthlyPayment),
      
      // Vehicle details
      registrationNumber,
      kilometers: parseInt(kilometers),
      warranty,
      adUrl,
      
      // Metadata
      timestamp: new Date().toISOString(),
      source: 'website',
      status: 'new',
    };

    // Configuration - Update these with your actual details
    const CONFIG = {
      // Email recipients
      loanEmail: 'kontakt@enkelfinansiering.no',
      adminEmail: 'kontakt@enkelfinansiering.no',
      
      // Partner/CRM integration
      partnerWebhook: process.env.PARTNER_WEBHOOK_URL,
      crmWebhook: process.env.CRM_WEBHOOK_URL,
      
      // Database
      databaseUrl: process.env.DATABASE_URL,
    };

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('❌ RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Generate email content for team
    const teamEmailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ny lånesøknad - Enkel Finansiering</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 30px;">
          <h1 style="color: #333; font-size: 24px; margin-bottom: 20px; border-bottom: 2px solid #333; padding-bottom: 10px;">
            Ny lånesøknad mottatt
          </h1>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #666;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px;">Personopplysninger</h2>
            <p style="margin: 8px 0;"><strong>Navn:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>E-post:</strong> <a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Telefon:</strong> <a href="tel:${phone}" style="color: #0066cc; text-decoration: none;">${phone}</a></p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 6px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px;">Lånedetaljer</h2>
            <p style="margin: 8px 0;"><strong>Gjenstandspris:</strong> ${itemPrice.toLocaleString('no-NO')} kr</p>
            <p style="margin: 8px 0;"><strong>Lånebeløp:</strong> ${loanAmount.toLocaleString('no-NO')} kr</p>
            <p style="margin: 8px 0;"><strong>Egenkapital:</strong> ${downPayment.toLocaleString('no-NO')} kr</p>
            <p style="margin: 8px 0;"><strong>Nedbetalingstid:</strong> ${loanTerm} år</p>
            <p style="margin: 8px 0;"><strong>Månedlig betaling:</strong> ${Math.round(monthlyPayment).toLocaleString('no-NO')} kr</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 6px; margin: 20px 0;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px;">Kjøretøy</h2>
            <p style="margin: 8px 0;"><strong>Registreringsnummer:</strong> ${registrationNumber}</p>
            <p style="margin: 8px 0;"><strong>Kilometerstand:</strong> ${kilometers.toLocaleString('no-NO')} km</p>
            ${warranty ? `<p style="margin: 8px 0;"><strong>Garanti:</strong> ${warranty}</p>` : ''}
            ${adUrl ? `<p style="margin: 8px 0;"><strong>Annonse:</strong> <a href="${adUrl}" target="_blank" style="color: #0066cc; text-decoration: none;">Se annonse</a></p>` : ''}
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #f9f9f9; border-radius: 6px; font-size: 14px; color: #666;">
            <p style="margin: 0;"><strong>Mottatt:</strong> ${new Date().toLocaleString('no-NO')}</p>
            <p style="margin: 5px 0 0 0;"><strong>Kilde:</strong> Enkel Finansiering - Lånesøknad</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const teamEmailText = `
NY LÅNESØKNAD MOTTATT

Personopplysninger:
Navn: ${name}
E-post: ${email}
Telefon: ${phone}

Lånedetaljer:
Gjenstandspris: ${itemPrice.toLocaleString('no-NO')} kr
Lånebeløp: ${loanAmount.toLocaleString('no-NO')} kr
Egenkapital: ${downPayment.toLocaleString('no-NO')} kr
Nedbetalingstid: ${loanTerm} år
Månedlig betaling: ${Math.round(monthlyPayment).toLocaleString('no-NO')} kr

Kjøretøy:
Registreringsnummer: ${registrationNumber}
Kilometerstand: ${kilometers.toLocaleString('no-NO')} km
${warranty ? `Garanti: ${warranty}` : ''}
${adUrl ? `Annonse: ${adUrl}` : ''}

Mottatt: ${new Date().toLocaleString('no-NO')}
Kilde: Enkel Finansiering - Lånesøknad

---
Enkel Finansiering
https://enkelfinansiering.no
    `;

    // Send email to team
    console.log('📧 Sending team email for loan application...');
    let teamEmailResult;
    let teamEmailSent = false;
    
    try {
      teamEmailResult = await resend.emails.send({
        from: 'Enkel Finansiering <kontakt@enkelfinansiering.no>',
        to: ['kontakt@enkelfinansiering.no'],
        subject: `Lånesøknad: ${name} - ${Math.round(monthlyPayment).toLocaleString('no-NO')} kr/mnd`,
        html: teamEmailHtml,
        text: teamEmailText,
        replyTo: email,
        headers: {
          'X-Priority': '3',
          'X-MSMail-Priority': 'Normal',
          'Importance': 'Normal',
        },
      });
      console.log('📧 Team email result:', teamEmailResult);
      teamEmailSent = !!teamEmailResult.data?.id;
    } catch (emailError) {
      console.error('❌ Team email failed:', emailError);
      teamEmailSent = false;
    }

    // Send confirmation email to user
    if (teamEmailSent) {
      console.log('📧 Sending confirmation email to user:', email);
      try {
        const userEmailResult = await resend.emails.send({
          from: 'Enkel Finansiering <kontakt@enkelfinansiering.no>',
          to: [email],
          subject: 'Lånesøknad mottatt - Vi kontakter deg innen 24 timer',
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
                  Takk for din lånesøknad!
                </h1>
                
                <p>Hei ${name},</p>
                
                <p>Takk for at du søkte om billån hos oss. Vi har mottatt søknaden din og vil kontakte deg innen 24 timer.</p>
                
                <div style="background: #f5f5f5; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #666;">
                  <h2 style="color: #333; margin-top: 0; font-size: 18px;">Søknadsdetaljer</h2>
                  <p style="margin: 8px 0;"><strong>Lånebeløp:</strong> ${loanAmount.toLocaleString('no-NO')} kr</p>
                  <p style="margin: 8px 0;"><strong>Månedlig betaling:</strong> ${Math.round(monthlyPayment).toLocaleString('no-NO')} kr</p>
                  <p style="margin: 8px 0;"><strong>Nedbetalingstid:</strong> ${loanTerm} år</p>
                </div>
                
                <div style="background: #f5f5f5; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #666;">
                  <h2 style="color: #333; margin-top: 0; font-size: 18px;">Hva skjer nå?</h2>
                  <ul style="margin: 10px 0; padding-left: 20px;">
                    <li>Vi gjennomgår din søknad</li>
                    <li>Vår samarbeidspartner kontakter deg innen 24 timer</li>
                    <li>Du får et uforpliktende tilbud</li>
                  </ul>
                </div>
                
                <p>Hvis du har spørsmål, kan du kontakte oss på <a href="mailto:kontakt@enkelfinansiering.no" style="color: #0066cc; text-decoration: none;">kontakt@enkelfinansiering.no</a>.</p>
                
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

Takk for at du søkte om billån hos oss. Vi har mottatt søknaden din og vil kontakte deg innen 24 timer.

Søknadsdetaljer:
Lånebeløp: ${loanAmount.toLocaleString('no-NO')} kr
Månedlig betaling: ${Math.round(monthlyPayment).toLocaleString('no-NO')} kr
Nedbetalingstid: ${loanTerm} år

Hva skjer nå?
- Vi gjennomgår din søknad
- Vår samarbeidspartner kontakter deg innen 24 timer
- Du får et uforpliktende tilbud

Hvis du har spørsmål, kan du kontakte oss på kontakt@enkelfinansiering.no

Med vennlig hilsen,
Teamet i Enkel Finansiering
enkelfinansiering.no`,
          headers: {
            'X-Priority': '3',
            'X-MSMail-Priority': 'Normal',
            'Importance': 'Normal',
          },
        });
        console.log('📧 User confirmation email result:', userEmailResult);
      } catch (userEmailError) {
        console.error('❌ User confirmation email failed:', userEmailError);
      }
    } else {
      console.log('❌ Team email failed, not sending user confirmation');
    }

    console.log('Loan application submission:', {
      ...applicationData,
      teamEmailSent,
      teamEmailId: teamEmailResult?.data?.id,
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Søknaden din er sendt! Vi kontakter deg innen 24 timer.',
        applicationId: `APP-${Date.now()}`,
        monthlyPayment: Math.round(monthlyPayment)
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Loan application error:', error);
    return NextResponse.json(
      { error: 'Noe gikk galt. Prøv igjen senere.' },
      { status: 500 }
    );
  }
}
