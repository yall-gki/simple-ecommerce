// app.js
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import connectDB from './config/mongoose.config.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import productrouters from './routes/productRoutes.js';
import { rateLimit } from "express-rate-limit";

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  limit: 100,
  standardHeaders: "draft-7", 
  legacyHeaders: false, 
});


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

app.use("/api/users", authLimiter);

dotenv.config();


connectDB()

const app = express();
app.use(cookieParser())

app.use(morgan('dev')); 
app.use(helmet());
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(express.json({{limit :" 10kb"}}))

// Routes
app.use('/api/users', userRoutes);
app.use("/api/products", productrouters);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
