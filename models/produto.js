const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    internalCode: { type: String, required: true },
});

module.exports = mongoose.model('Produto', produtoSchema);
