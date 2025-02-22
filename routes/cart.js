const express = require('express');
const supabase = require('../supabase');
const router = express.Router();

// Ruta para agregar un producto al carrito
router.post('/add', async (req, res) => {
    const { user_id, product_id, quantity } = req.body;

    const { data, error } = await supabase
        .from('cart')
        .insert([{ user_id, product_id, quantity }]);

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json({ message: 'Producto añadido al carrito', data });
});

module.exports = router;
