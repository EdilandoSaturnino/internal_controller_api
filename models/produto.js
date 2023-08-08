const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    internalCode: { type: String, required: true },
    name: { type: String, required: false },
    quantity: { type: Number, required: false },
    price: { type: Number, required: false },
});

module.exports = mongoose.model('Produto', produtoSchema);