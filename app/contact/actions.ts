"use strict";
"use server";

import { resend } from "@/lib/resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendContactEmail(formData: unknown) {
  try {
    const validatedFields = contactFormSchema.safeParse(formData);

    if (!validatedFields.success) {
      return { 
        success: false, 
        error: "Invalid form data. Please check your inputs." 
      };
    }

    const { name, email, phone, company, message } = validatedFields.data;

    const data = await resend.emails.send({
      from: `WHYN Contact Form <${process.env.FROM_EMAIL || 'onboarding@resend.dev'}>`,
      to: [process.env.CONTACT_EMAIL || 'connect.nishantdev@gmail.com'],
      subject: `New Inquiry from ${name} - WHYN`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #000; margin-bottom: 20px;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #000;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was sent from the WHYN contact form.</p>
        </div>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Resend Error:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}
