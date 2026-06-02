import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = Number(process.env.PORT || 8000);
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit-tracker';

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', port: PORT });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected at', MONGO_URI);
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.listen(PORT, () => {
  console.log(`Backend server listening on http://localhost:${PORT}`);
});
