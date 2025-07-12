import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import prisma from './prisma/client';
import userRoutes from './routes/user.routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);

app.get('/health', async (req, res) => {
  try {
    await prisma.$connect();
    res.send('Banco conectado com sucesso! 🚀');
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
    res.status(500).send('Erro ao conectar no banco.');
  }
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;