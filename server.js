import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Request Parsers Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static dashboard files
app.use(express.static('public'));

// Root / Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the AI-Genius Backend API (MA 216 Assignment 3)',
    status: 'Healthy',
    timestamp: new Date(),
  });
});

// Bind API Route Handlers
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);

// Error Handling Middlewares (Must be defined after all routes)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Server] AI-Genius Server listening in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
