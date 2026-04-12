import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: Number(process.env.EMAIL_PORT) === 465, // true for 465, false for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email to Rahab (the recipient)
        const inquiryMailOptions = {
            from: `"${process.env.EMAIL_USER}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.RECIPIENT_EMAIL,
            subject: `Portfolio Contact: ${email}`,
            text: `
        New message from your portfolio website:
        
        From: ${email}
        
        Message:
        ${message}
      `,
        };

        // Confirmation email to the sender
        const confirmationMailOptions = {
            from: `"Rahab Kamau" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Inquiry Received - Rahab Kamau',
            text: `
        Hello,

        Thank you for reaching out! This is a confirmation that your inquiry has been received.
        
        I have received your message and will get back to you shortly.

        Best regards,
        Rahab Kamau
      `,
        };

        // Send inquiry immediately
        await transporter.sendMail(inquiryMailOptions);

        // Send confirmation after 6 seconds delay (non-blocking)
        setTimeout(async () => {
            try {
                await transporter.sendMail(confirmationMailOptions);
            } catch (err) {
                console.error('Delayed confirmation error:', err);
            }
        }, 6000); // 6,000 ms = 6 seconds

        return NextResponse.json({ success: true, message: 'Inquiry sent; confirmation following in 6 seconds.' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
