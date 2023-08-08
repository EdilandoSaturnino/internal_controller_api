const express = require('express');
const Cliente = require('../models/cliente');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const cliente = new Cliente({
            internalCode: req.body.internalCode,
            name: req.body.name
        });
        await cliente.save();
        res.status(201).json({ msg: 'Cliente criado com sucesso!', cliente});
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

// Read by Id
router.get('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(
            req.params.id, req.body, { new: true }
        );
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate((req.params.id), req.body, { new: true });
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json({ msg: 'Cliente atualizado com sucesso!', cliente});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete
router.delete('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json({ message: 'Cliente deletado com sucesso!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete all
router.post('/deleteAll', async (req, res) => {
    try {
        await Cliente.deleteMany({});
        res.json({msg: 'Todos os clientes foram deletados com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
