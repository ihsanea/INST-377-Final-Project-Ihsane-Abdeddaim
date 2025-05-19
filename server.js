import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import itemsRoute from './api/items.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // move your HTML/CSS/JS into a /public folder

app.use('/api/items', itemsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});