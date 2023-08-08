const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    internalCode: { type: String, required: true },
});

module.exports = mongoose.model('Cliente', clienteSchema);
