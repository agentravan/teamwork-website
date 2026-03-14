import nodemailer from 'nodemailer';

// Create a reusable transporter using Zoho SMTP settings
// In production, ZOHO_USER and ZOHO_PASS must be set in .env
const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_USER || 'teamwork.hrsolution@zohomail.in',
    pass: process.env.ZOHO_PASS || 'dummy_password_for_build',
  },
});

/**
 * Sends a confirmation email to the candidate when they apply.
 */
export async function sendCandidateConfirmation(candidateEmail: string, candidateName: string, jobTitle: string) {
  try {
    const mailOptions = {
      from: `"TeamWork HR Solutions" <${process.env.ZOHO_USER || 'teamwork.hrsolution@zohomail.in'}>`,
      to: candidateEmail,
      subject: `Application Received: ${jobTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">TeamWork Solutions</h1>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #334155;">Hi ${candidateName},</p>
            <p style="font-size: 16px; color: #334155; line-height: 1.6;">
              Thank you for applying for the <strong>${jobTitle}</strong> position. We have successfully received your application.
            </p>
            <p style="font-size: 16px; color: #334155; line-height: 1.6;">
              Our recruitment team is currently reviewing your profile against the requirements for this role. If your qualifications match our current needs, we will be in touch to schedule an interview.
            </p>
            <div style="margin: 32px 0; text-align: center;">
              <a href="https://teamwork-website.vercel.app/careers" style="background-color: #0f172a; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">View More Opportunities</a>
            </div>
            <p style="font-size: 16px; color: #334155; line-height: 1.6;">
              Best regards,<br>
              <strong>Global Talent Acquisition Team</strong><br>
              TeamWork Solutions
            </p>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #eaeaea;">
            <p style="font-size: 12px; color: #64748b; margin: 0;">
              This is an automated email. Please do not reply directly to this message.
            </p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Candidate confirmation email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending candidate confirmation email:", error);
    return { success: false, error };
  }
}

/**
 * Sends a notification email to the internal HR team when a new application is received.
 */
export async function sendAdminNotification(jobTitle: string, candidateName: string, candidateEmail: string) {
  try {
    const adminEmail = 'teamwork.hrsolution@zohomail.in';
    
    const mailOptions = {
      from: `"Career Portal Internals" <${process.env.ZOHO_USER || 'teamwork.hrsolution@zohomail.in'}>`,
      to: adminEmail,
      subject: `New Application: ${jobTitle} - ${candidateName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2563eb; padding: 24px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Application Received</h2>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p style="font-size: 16px; color: #334155; margin-top: 0;">A new candidate has applied via the Careers Portal.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #64748b; width: 120px;"><strong>Candidate:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #0f172a; font-weight: 500;">${candidateName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #0f172a;"><a href="mailto:${candidateEmail}" style="color: #2563eb; text-decoration: none;">${candidateEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #64748b;"><strong>Job Role:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eaeaea; color: #0f172a; font-weight: 500;">${jobTitle}</td>
              </tr>
            </table>

            <div style="margin-top: 32px;">
              <a href="https://teamwork-website.vercel.app/career-admin/pipeline" style="background-color: #0f172a; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Open Kanban Board</a>
            </div>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Admin notification email sent:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending admin notification email:", error);
    return { success: false, error };
  }
}
