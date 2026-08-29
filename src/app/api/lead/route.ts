import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Simple in-memory rate limiting map for Vercel/Node runtime
// Stores IP -> array of timestamps (ms)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  
  // Filter out timestamps older than the window
  const validTimestamps = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction and Rate Limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '127.0.0.1';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many quote requests from your IP. Please wait a minute and try again.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      phone,
      company,
      vertical,
      message,
      honeypot,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      page_source,
    } = body;

    // 2. Honeypot check for spam bots
    if (honeypot && honeypot.trim() !== '') {
      // Silently return success to bot without processing
      return NextResponse.json(
        { success: true, message: 'Quote request submitted successfully.' },
        { status: 200 }
      );
    }

    // 3. Validation
    if (!name || !email || !phone || !company) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields (Name, Email, Phone, Company).' },
        { status: 400 }
      );
    }

    const leadPayload = {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      company,
      vertical: vertical || 'General Group Inquiry',
      message: message || '',
      page_source: page_source || '/',
      ip,
      utm: {
        source: utm_source || 'direct',
        medium: utm_medium || 'none',
        campaign: utm_campaign || 'none',
        content: utm_content || '',
        term: utm_term || '',
      },
    };

    console.log('[TeamWork Lead API] New Lead Received:', JSON.stringify(leadPayload, null, 2));

    // 4. Webhook Dispatch (e.g. Google Sheets Apps Script, Zapier, CRM)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl && !webhookUrl.includes('YOUR_SCRIPT_ID')) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadPayload),
        });
      } catch (err) {
        console.error('[TeamWork Lead API] Webhook dispatch error:', err);
      }
    }

    // 5. Resend Email Dispatch
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.NOTIFICATION_EMAIL || 'contact@teamworkgroup.in';
    if (resendKey && !resendKey.includes('YourResendApiKeyHere')) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'TeamWork Group Website <leads@teamworkgroup.in>',
            to: [notifyEmail],
            subject: `🔥 New Lead [${vertical || 'Group'}]: ${name} (${company})`,
            html: `
              <h2>New Lead Received on TeamWork Group Website</h2>
              <p><strong>Vertical:</strong> ${vertical}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Message:</strong> ${message || 'N/A'}</p>
              <hr />
              <h4>Campaign Attribution (UTM):</h4>
              <ul>
                <li><strong>Source:</strong> ${utm_source || 'direct'}</li>
                <li><strong>Medium:</strong> ${utm_medium || 'none'}</li>
                <li><strong>Campaign:</strong> ${utm_campaign || 'none'}</li>
                <li><strong>Page Source:</strong> ${page_source || '/'}</li>
              </ul>
            `,
          }),
        });
      } catch (err) {
        console.error('[TeamWork Lead API] Resend email dispatch error:', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your quote request has been received by TeamWork Group.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[TeamWork Lead API] Handler error:', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
