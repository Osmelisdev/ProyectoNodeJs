import app from "./app.js";
import mongoose from 'mongoose';

const port = 3030;
const url = 'mongodb://127.0.0.1:27017/seguridad';

// Conecta a MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión exitosa a MongoDB');

    })
    .catch((err) => {
        console.error('Error al conectar a MongoDB:', err);
    });

// Iniciar el servidor
app.listen(port, () => {
    console.log("Servidor iniciado en el puerto 3030");
});


