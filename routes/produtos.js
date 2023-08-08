const express = require('express');
const Produto = require('../models/produto');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
    try {
        const produto = new Produto({
            internalCode: req.body.internalCode,
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
        });
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
router.get('/:_id', async (req, res) => {
    try {
        const produto = await Produto.findOne({
            internalCode: req.body.internalCode,
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
        });
        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json(produto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update
router.put('/:_id', async (req, res) => {
    try {
        const produto = await Produto.findOneAndUpdate({
            internalCode: req.body.internalCode,
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
        },
            req.body, { new: true });
        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json(produto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete
router.delete('/:_id', async (req, res) => {
    try {
        const produto = await Produto.findOneAndDelete({
            internalCode: req.body.internalCode,
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
        });
        if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
        res.json({ message: 'Produto deletado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete all
router.post('/deleteAll', async (req, res) => {
    try {
        await Produto.deleteMany({});
        res.json({msg: 'Todos os produtos foram deletados com sucesso!'})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
