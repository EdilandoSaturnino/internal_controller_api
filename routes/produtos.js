const express = require('express');
const Produto = require('../models/produto');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const produto = new Produto({ internalCode: req.body.internalCode });
        await produto.save();
        res.status(201).json(produto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all
router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read by internalCode
router.get('/:internalCode', async (req, res) => {
    try {
        const produto = await Produto.findOne({ internalCode: req.params.internalCode });
        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json(produto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
router.put('/:internalCode', async (req, res) => {
    try {
        const produto = await Produto.findOneAndUpdate({ internalCode: req.params.internalCode }, req.body, { new: true });
        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json(produto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete
router.delete('/:internalCode', async (req, res) => {
    try {
        const produto = await Produto.findOneAndDelete({ internalCode: req.params.internalCode });
        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json({ message: 'Produto deletado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
