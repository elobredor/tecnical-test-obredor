import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors({
  origin: '*', // In production, you should specify the exact origins
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});