
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { type, review, reply } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: `"Rahab - Virtual Assistant" <${process.env.EMAIL_USER}>`,
            replyTo: 'rahabkamauva@gmail.com',
        };

        if (type === 'admin') {
            // Email to Admin (Rahab)
            mailOptions.to = process.env.RECIPIENT_EMAIL || 'rahabkamauva@gmail.com'; // Fallback if env var missing
            mailOptions.subject = `New 5-Star Review Received! ⭐`; // Make it exciting, though rating might vary
            // Adjust subject based on rating if possible, but generic is fine for now. 
            // Let's make it dynamic.

            const ratingStars = "⭐".repeat(review.rating || 1);
            mailOptions.subject = `New Review: ${review.name} sent ${review.rating} Stars ${ratingStars}`;

            mailOptions.html = `
                <h2>New Review Received</h2>
                <p><strong>Name:</strong> ${review.name}</p>
                <p><strong>Email:</strong> ${review.email}</p>
                <p><strong>Rating:</strong> ${review.rating} / 5</p>
                <p><strong>Comment:</strong></p>
                <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
                    ${review.text}
                </blockquote>
                <p><em>This review has been saved to Firestore.</em></p>
            `;
        } else if (type === 'reviewer') {
            // Email to Reviewer (The Client)
            mailOptions.to = review.email;
            mailOptions.subject = `Re: Your review for Rahab Kamau`;
            mailOptions.html = `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <p>Hi ${review.name},</p>
                    <p>I just wanted to personally thank you for leaving such a wonderful review on my portfolio!</p>
                    <p>I left a reply to your feedback:</p>
                    <blockquote style="background: #f0fdf4; padding: 15px; border-left: 4px solid #10b981; margin: 20px 0;">
                        "${reply.text}"
                    </blockquote>
                    <p>It was a pleasure connecting with you. If you need anything else in the future, don't hesitate to reach out!</p>
                    <br/>
                    <p>Warm regards,</p>
                    <p><strong>Rahab Kamau</strong><br/>
                    <em>Executive Virtual Assistant</em></p>
                </div>
            `;
        } else {
            return NextResponse.json({ error: 'Invalid notification type' }, { status: 400 });
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: 'Email sent successfully' });

    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
