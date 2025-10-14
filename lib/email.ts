// Email service for sending form submissions

interface EmailData {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface LoanApplicationData {
  name: string;
  email: string;
  phone: string;
  itemPrice: number;
  loanAmount: number;
  monthlyPayment: number;
  registrationNumber: string;
  kilometers: string;
  warranty: string;
  adUrl?: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    // For now, we'll just log the email
    // In production, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Nodemailer with SMTP
    
    console.log('📧 Email would be sent:', {
      to: data.to,
      subject: data.subject,
      html: data.html,
    });

    // Simulate email sending
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
}

export function generateContactEmail(data: ContactFormData) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #004D61;">Ny henvendelse fra kontaktskjema</h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #004D61; margin-top: 0;">Kontaktinformasjon</h3>
        <p><strong>Navn:</strong> ${data.name}</p>
        <p><strong>E-post:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Telefon:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
      </div>
      
      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
        <h3 style="color: #004D61; margin-top: 0;">Melding</h3>
        <p style="white-space: pre-wrap;">${data.message}</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;">
        <p style="margin: 0; font-size: 14px; color: #666;">
          <strong>Sendt:</strong> ${new Date().toLocaleString('no-NO')}<br>
          <strong>Fra:</strong> Enkel Finansiering kontaktskjema
        </p>
      </div>
    </div>
  `;

  const text = `
Ny henvendelse fra kontaktskjema

Kontaktinformasjon:
Navn: ${data.name}
E-post: ${data.email}
${data.phone ? `Telefon: ${data.phone}` : ''}

Melding:
${data.message}

Sendt: ${new Date().toLocaleString('no-NO')}
Fra: Enkel Finansiering kontaktskjema
  `;

  return {
    subject: `Ny henvendelse fra ${data.name}`,
    html,
    text,
  };
}

export function generateLoanApplicationEmail(data: LoanApplicationData) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #004D61;">Ny lånesøknad</h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #004D61; margin-top: 0;">Søkerinformasjon</h3>
        <p><strong>Navn:</strong> ${data.name}</p>
        <p><strong>E-post:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Telefon:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
      </div>
      
      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #004D61; margin-top: 0;">Lånedetaljer</h3>
        <p><strong>Gjenstandspris:</strong> ${data.itemPrice.toLocaleString('nb-NO')} kr</p>
        <p><strong>Lånebeløp:</strong> ${data.loanAmount.toLocaleString('nb-NO')} kr</p>
        <p><strong>Egenkapital:</strong> ${(data.itemPrice - data.loanAmount).toLocaleString('nb-NO')} kr</p>
        <p><strong>Estimert månedskostnad:</strong> ${data.monthlyPayment.toLocaleString('nb-NO')} kr</p>
      </div>
      
      <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #004D61; margin-top: 0;">Kjøretøyinformasjon</h3>
        <p><strong>Registreringsnummer:</strong> ${data.registrationNumber}</p>
        <p><strong>Kilometerstand:</strong> ${data.kilometers} km</p>
        <p><strong>Garanti:</strong> ${data.warranty}</p>
        ${data.adUrl ? `<p><strong>Annonse:</strong> <a href="${data.adUrl}" target="_blank">Se annonse</a></p>` : ''}
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;">
        <p style="margin: 0; font-size: 14px; color: #666;">
          <strong>Sendt:</strong> ${new Date().toLocaleString('no-NO')}<br>
          <strong>Fra:</strong> Enkel Finansiering lånesøknad
        </p>
      </div>
    </div>
  `;

  const text = `
Ny lånesøknad

Søkerinformasjon:
Navn: ${data.name}
E-post: ${data.email}
Telefon: ${data.phone}

Lånedetaljer:
Gjenstandspris: ${data.itemPrice.toLocaleString('nb-NO')} kr
Lånebeløp: ${data.loanAmount.toLocaleString('nb-NO')} kr
Egenkapital: ${(data.itemPrice - data.loanAmount).toLocaleString('nb-NO')} kr
Estimert månedskostnad: ${data.monthlyPayment.toLocaleString('nb-NO')} kr

Kjøretøyinformasjon:
Registreringsnummer: ${data.registrationNumber}
Kilometerstand: ${data.kilometers} km
Garanti: ${data.warranty}
${data.adUrl ? `Annonse: ${data.adUrl}` : ''}

Sendt: ${new Date().toLocaleString('no-NO')}
Fra: Enkel Finansiering lånesøknad
  `;

  return {
    subject: `Ny lånesøknad fra ${data.name} - ${data.registrationNumber}`,
    html,
    text,
  };
}
