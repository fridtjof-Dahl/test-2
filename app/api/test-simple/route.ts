import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    console.log('🧪 Testing Resend email...');
    
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        success: false, 
        message: 'RESEND_API_KEY not configured',
        timestamp: new Date().toISOString()
      }, { status: 500 });
    }

    const result = await resend.emails.send({
      from: 'Enkel Finansiering <noreply@enkelfinansiering.no>',
      to: ['kontakt@enkelfinansiering.no'],
      subject: 'Test Email - Resend',
      html: '<p>Dette er en test email sendt via Resend.</p>',
      text: 'Dette er en test email sendt via Resend.',
    });
    
    console.log('📧 Resend email result:', result);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Resend email sent successfully',
      emailId: result.data?.id,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Resend email error:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Resend email error: ' + (error as Error).message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
