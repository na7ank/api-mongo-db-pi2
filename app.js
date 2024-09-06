const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Conectar ao banco de dados
connectDB();

// Inicializar o app Express
const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Incluir as rotas
app.use('/clients', require('./routes/clientRoutes'));
//app.use('/pets', require('./routes/petRoutes'));
//app.use('/appointments', require('./routes/appointmentRoutes'));
//app.use('/time_slots', require('./routes/timeSlotRoutes'));

// Porta do servidor
const PORT = process.env.PORT || 5000;

// Iniciar o servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
