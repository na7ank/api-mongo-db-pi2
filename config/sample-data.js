// Importa o connectDB e o mongoose
const { connectDB, mongoose } = require('./db');
const dotenv = require('dotenv');

// Modelo Client
const Client = require('../models/Client'); // Certifique-se de que o caminho está correto

// Carrega variáveis de ambiente
dotenv.config({ path: '../.env' });

// Dados de exemplo para popular a coleção clients
const clientsData = [
  { name: 'John Doe', email: 'john.doe@example.com', phone: '(11) 98433-8071' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '(21) 4154-6282' },
  { name: 'Carlos Silva', email: 'carlos.silva@example.com', phone: '(31) 91234-5678' },
];

// Função para popular a coleção
const populateClients = async () => {
  try {
    // Conecta ao banco
    await connectDB();

    // Remove todos os clientes existentes (opcional)
    await Client.deleteMany({});
    console.log('Coleção de clientes limpa');

    // Insere os novos dados
    await Client.insertMany(clientsData);
    console.log('Clientes inseridos com sucesso!');

    // Fecha a conexão com o banco de dados
    mongoose.connection.close(); // mongoose ainda é necessário aqui para fechar a conexão
  } catch (err) {
    console.error('Erro ao popular clientes:', err);
    mongoose.connection.close();
  }
};

// Executa o script
populateClients();
