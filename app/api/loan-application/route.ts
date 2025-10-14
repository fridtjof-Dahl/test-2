import { NextRequest, NextResponse } from 'next/server';

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send to your loan partner/CRM
    // 3. Send confirmation email to user
    // 4. Send notification to your team

    console.log('Loan application submission:', {
      ...applicationData,
      // This is where you'd send the data
      recipients: {
        team: CONFIG.loanEmail,
        admin: CONFIG.adminEmail,
        partner: CONFIG.partnerWebhook,
      }
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
