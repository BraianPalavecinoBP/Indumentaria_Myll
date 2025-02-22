const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); // Importa helmet para mejorar la seguridad
const authRoutes = require('./routes/auth');  
const cartRoutes = require('./routes/cart');  

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet()); // Usa helmet para establecer encabezados de seguridad

// Establecer una política CSP básica
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net;");
    next();
});

// Ruta de comprobación
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente 🚀');
});

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));



