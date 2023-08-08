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

app.get('/', (req, res) => {
    const healthInfo = {
        status: 'Up',
        uptime: process.uptime(),
        message: 'API está saudável',
        timestamp: Date.now(),
    };
    res.status(200).json(healthInfo);
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
