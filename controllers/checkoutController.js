import Product from "../models/Product.js";


import { verifySignature } from '@chargily/chargily-pay';

const API_SECRET_KEY = 'YOUR_API_SECRET_KEY_HERE';


app.post('/webhook', (req, res) => {
  const signature = req.get('signature') || '';
  const payload = req.rawBody;

  if (!signature) {
    console.log('Signature header is missing');
    res.sendStatus(400);
    return;
  }

  try {
    if (!verifySignature(payload, signature, API_SECRET_KEY)) {
      console.log('Signature is invalid');
      res.sendStatus(403);
      return;
    }
  } catch (error) {
    console.log(
      'Something happened while trying to process the request to the webhook'
    );
    res.sendStatus(403);
    return;
  }

  const event = req.body;
  // You can use the event.type here to implement your own logic
  console.log(event);

  res.sendStatus(200);
});

