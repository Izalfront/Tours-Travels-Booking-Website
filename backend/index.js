import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// for testing
app.get('/', (req, res) => {
  res.send('api is working');
});
// middleware
app.use(express.json());
apap.use(cors());
app.use(cookieParser());
app.listen(port, () => {
  console.log('listening on port', port);
});
