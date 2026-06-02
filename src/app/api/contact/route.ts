import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, desk, message } = body;

    // Validate fields
    if (!name || !email || !phone || !desk || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // SMTP Configuration from system environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASSWORD;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@biocyteorganics.com";

    // Setup stylized HTML email template matching BOPL corporate brand (Orange/Teal/Slate)
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F8FAFC; padding: 40px; color: #1E293B;">
        <div style="max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; border: 1px solid #E2E8F0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
          
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #FF6B00 0%, #EA580C 100%); padding: 30px; text-align: center; color: #FFFFFF;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px;">BOPL Portal</h1>
            <p style="margin: 5px 0 0 0; font-size: 12px; font-weight: 600; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Secure Corporate Inquiry Transmitted</p>
          </div>

          <!-- Content Body -->
          <div style="padding: 30px;">
            <h2 style="margin-top: 0; font-size: 16px; font-weight: 700; color: #0F172A; border-bottom: 2px solid #F1F5F9; padding-bottom: 10px;">Inquiry Specifications</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 13px;">
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: 600; width: 140px;">Proposer Name:</td>
                <td style="padding: 8px 0; color: #0F172A; font-weight: 700;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Email Address:</td>
                <td style="padding: 8px 0; color: #0F172A; font-weight: 700;"><a href="mailto:${email}" style="color: #FF6B00; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Phone Number:</td>
                <td style="padding: 8px 0; color: #0F172A; font-weight: 700;"><a href="tel:${phone}" style="color: #FF6B00; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-weight: 600;">Target Desk:</td>
                <td style="padding: 8px 0; color: #00B8A9; font-weight: 700; text-transform: uppercase;">${desk}</td>
              </tr>
            </table>

            <h2 style="font-size: 16px; font-weight: 700; color: #0F172A; border-bottom: 2px solid #F1F5F9; padding-bottom: 10px; margin-top: 30px;">Inquiry Message</h2>
            <div style="background-color: #F8FAFC; padding: 20px; border-radius: 8px; border: 1px solid #F1F5F9; font-size: 13px; line-height: 1.6; color: #334155; margin-top: 15px;">
              ${message.replace(/\n/g, "<br />")}
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #F8FAFC; padding: 20px; text-align: center; font-size: 11px; color: #94A3B8; border-top: 1px solid #E2E8F0;">
            <p style="margin: 0;">This email was securely generated via the corporate contact portal of Biocyte Organics Pvt. Ltd.</p>
            <p style="margin: 5px 0 0 0;">&copy; 2026 Biocyte Organics Private Limited. All Rights Reserved.</p>
          </div>

        </div>
      </div>
    `;

    // Local Development Logging / Fallback if SMTP is not configured
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.log("=========================================");
      console.log("CONTACT PORTAL INQUIRY RECEIVED (LOCAL LOG)");
      console.log(`From: ${name} (${email})`);
      console.log(`Phone: ${phone}`);
      console.log(`Target Desk: ${desk}`);
      console.log(`Message: ${message}`);
      console.log("=========================================");

      return NextResponse.json({
        success: true,
        message: "Inquiry successfully logged in sandbox environment (SMTP environment parameters missing).",
        sandbox: true,
      });
    }

    // SMTP Mailer Transport setup
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // True for port 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Dispatch mail to administrative inbox
    await transporter.sendMail({
      from: `"${name} (BOPL Portal)" <${smtpUser}>`,
      to: receiverEmail,
      subject: `New Corporate Inquiry: ${desk} - from ${name}`,
      text: `Inquiry from ${name} (${email}, Phone: ${phone}) regarding: ${desk}\n\nMessage:\n${message}`,
      html: emailHtml,
    });

    return NextResponse.json({
      success: true,
      message: "Business proposal transmitted successfully.",
    });
  } catch (error: any) {
    console.error("Contact API Handler Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error during proposal dispatch." },
      { status: 500 }
    );
  }
}
