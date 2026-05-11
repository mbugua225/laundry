import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Assuming user will set these in their .env.local
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';

let client: twilio.Twilio | null = null;
if (accountSid && authToken) {
  client = twilio(accountSid, authToken);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone, message, email } = body;

    if (!phone || !message) {
      return NextResponse.json(
        { error: 'Phone and message are required' },
        { status: 400 }
      );
    }

    if (!client) {
      console.warn("Twilio credentials missing. Logging message to console instead.");
      console.log("\n--- MOCK WHATSAPP MESSAGE ---");
      console.log(`To: ${phone}\nMessage:\n${message}`);
      console.log("-----------------------------\n");
      return NextResponse.json(
        { success: true, mock: true, message: "Logged to console. Configure Twilio to actually send." },
        { status: 200 }
      );
    }

    // Format phone number. Make sure it has '+' and country code.
    let formattedPhone = phone.trim();
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '+254' + formattedPhone.substring(1);
    } else if (!formattedPhone.startsWith('+')) {
      formattedPhone = '+' + formattedPhone;
    }

    const twilioMessage = await client.messages.create({
      body: message,
      from: twilioWhatsAppNumber,
      to: `whatsapp:${formattedPhone}`
    });

    return NextResponse.json(
      { success: true, messageId: twilioMessage.sid },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending WhatsApp invoice:', error);
    return NextResponse.json(
      { error: 'Failed to send invoice', details: error.message },
      { status: 500 }
    );
  }
}
