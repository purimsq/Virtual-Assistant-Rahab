import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Hire Request" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New Portfolio Inquiry from ${email}`,
            text: `
        You have received a new message from your portfolio website:
        
        From: ${email}
        
        Message:
        ${message}
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }
}
