const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => console.error('Falha na conexão:', error));