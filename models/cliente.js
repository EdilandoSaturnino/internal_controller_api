const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    internalCode: { type: String, required: true },
    name: { type: String, required: false },
});

module.exports = mongoose.model('Cliente', clienteSchema);
