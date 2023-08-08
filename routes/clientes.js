const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const cliente = new Cliente({ internalCode: req.body.internalCode });
        await cliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read by internalCode
router.get('/:internalCode', async (req, res) => {
    try {
        const cliente = await Cliente.findOne({ internalCode: req.params.internalCode });
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
router.put('/:internalCode', async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndUpdate({ internalCode: req.params.internalCode }, req.body, { new: true });
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete
router.delete('/:internalCode', async (req, res) => {
    try {
        const cliente = await Cliente.findOneAndDelete({ internalCode: req.params.internalCode });
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json({ message: 'Cliente deletado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
