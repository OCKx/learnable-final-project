import express from 'express';
import authRoutes from './routes/authRoutes';
import fileRoutes from './routes/fileRoutes';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);


export default app;