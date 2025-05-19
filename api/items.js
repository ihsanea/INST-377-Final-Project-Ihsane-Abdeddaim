import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

router.get('/', async (req, res) => {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/items`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`
    }
  });
  const data = await response.json();
  res.json(data);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;

  const response = await fetch(`${SUPABASE_URL}/rest/v1/items`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, description })
  });

  const data = await response.json();
  res.json(data);
});

export default router;