import { NextResponse } from 'next/server';
import stripe from 'stripe';
// Initialize Stripe with a placeholder secret key (USER must replace this)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder', {
    apiVersion: '2025-01-27.acacia', // Use latest stable version or '2023-10-16' if typings require
});

export async function POST(request: Request) {
    try {
        const { amount, idempotencyKey } = await request.json();

        if (!amount) {
            return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
        }

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create(
            {
                amount: amount, // Amount in cents (e.g. 1000 = $10.00)
                currency: 'usd',
                // In the latest version of the API, specify the automatic payment methods parameter.
                // We find that these work best for most users.
                automatic_payment_methods: {
                    enabled: true,
                },
            },
            {
                idempotencyKey: idempotencyKey, // Stripe prevents double-charging with this key
            }
        );

        return NextResponse.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error: any) {
        console.error('Stripe error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
