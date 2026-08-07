// app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return Response.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Send email to company
    const { data, error } = await resend.emails.send({
      // FROM: Your verified company domain
      from: `Manyam Foods <${process.env.FROM_EMAIL}>`,
      // TO: Your company email
      to: [process.env.TO_EMAIL],
      // REPLY-TO: The customer's email (so you reply directly to them)
      replyTo: email,
      // SUBJECT: Shows customer name for easy identification
      subject: `New Enquiry from ${name} - ${subject || "General Inquiry"}`,
      // HTML: Clean, professional email template
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
          </head>
          <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <h1 style="color: #2d3748; margin: 0;">📬 New Website Enquiry</h1>
              <p style="color: #718096; margin: 5px 0 0;">A new enquiry has been submitted through Manyam Foods website</p>
            </div>
            
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 20px;">
              <div style="background: #f7fafc; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p style="margin: 0; color: #4a5568;">
                  <strong>👤 From:</strong> ${name}<br>
                  <strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #4299e1;">${email}</a><br>
                  <strong>📱 Phone:</strong> <a href="tel:${phone}" style="color: #4299e1;">${phone}</a>
                </p>
              </div>
              
              <h3 style="color: #2d3748; margin-top: 0;">Message</h3>
              <div style="background: #f7fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #4299e1;">
                ${message}
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #ebf8ff; border-radius: 8px; border-left: 4px solid #4299e1;">
                <p style="margin: 0; font-size: 14px; color: #2b6cb0;">
                  💡 <strong>Quick Action:</strong> Reply directly to this email to respond to <strong>${name}</strong>
                </p>
              </div>
            </div>
            
            <div style="padding: 20px 0; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #a0aec0;">
              <p style="margin: 0;">This enquiry was sent from the Manyam Foods website contact form.</p>
              <p style="margin: 5px 0 0;">© ${new Date().getFullYear()} Manyam Foods. All rights reserved.</p>
            </div>
          </body>
        </html>
      `,
      // Optional: Add a text version for email clients that don't support HTML
      text: `
        New Website Enquiry from Manyam Foods
        
        From: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject || "General Inquiry"}
        
        Message:
        ${message}
        
        ---
        Reply to this email to respond to ${name}
        This enquiry was sent from the Manyam Foods website.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    // Optional: Send confirmation email to customer
    try {
      await resend.emails.send({
        from: `Manyam Foods <${process.env.FROM_EMAIL}>`,
        to: [email],
        subject: `Thank you for contacting Manyam Foods`,
        html: `
          <!DOCTYPE html>
          <html>
            <body style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #2d3748;">Thank You for Reaching Out! 🙏</h2>
              <p>Dear ${name},</p>
              <p>Thank you for contacting <strong>Manyam Foods</strong>. We have received your enquiry and our team will get back to you within 24 hours.</p>
              
              <div style="background: #f7fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0;"><strong>Your enquiry summary:</strong></p>
                <p style="margin: 5px 0 0; color: #4a5568;">${message}</p>
              </div>
              
              <p style="color: #4a5568;">In the meantime, feel free to:</p>
              <ul style="color: #4a5568;">
                <li>Visit our <a href="https://manyamfoods.co.in" style="color: #4299e1;">website</a> for more information</li>
                <li>Follow us on social media for updates</li>
              </ul>
              
              <p style="color: #4a5568;">Warm regards,</p>
              <p style="color: #2d3748; font-weight: bold;">Manyam Foods Team</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
              <p style="font-size: 12px; color: #a0aec0; text-align: center;">
                This is an automated confirmation from Manyam Foods.
              </p>
            </body>
          </html>
        `,
      });
    } catch (confirmError) {
      // Don't fail the main request if confirmation email fails
      console.error("Confirmation email error:", confirmError);
    }

    return Response.json({
      success: true,
      message: "Enquiry submitted successfully! We'll get back to you soon.",
    });
  } catch (err) {
    console.error("API error:", err);
    return Response.json(
      {
        success: false,
        error: err.message || "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}