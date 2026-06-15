const express = require('express');
const router = express.Router();
const stripeKey = process.env.STRIPE_SECRET_KEY;

router.post('/create-payment-intent', async (req, res) => {
  const { amount, currency = 'usd' } = req.body;
  if (!amount) return res.status(400).json({ error: 'Amount required' });
  if (!stripeKey) return res.status(501).json({ error: 'Stripe not configured' });
  try {
    const Stripe = require('stripe');
    const stripe = Stripe(stripeKey);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
