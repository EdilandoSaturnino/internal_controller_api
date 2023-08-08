const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
require('./config/db');

const app = express();
const port = process.env.PORT || 4000;

const produtoRoutes = require('./routes/produtos');
const clienteRoutes = require('./routes/clientes');

app.use(express.json());
app.use('/produtos', produtoRoutes);
app.use('/clientes', clienteRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
