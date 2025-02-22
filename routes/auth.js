const express = require('express');
const supabase = require('../supabase'); // Importamos la conexión a Supabase
const router = express.Router();

// Ruta para registrar un usuario
// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const { user, error } = await supabase.auth.signUp({
        email,
        password,
    });

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json({ message: 'Usuario registrado con éxito', user });
});


// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: 'Inicio de sesión exitoso', data });
});

module.exports = router;


