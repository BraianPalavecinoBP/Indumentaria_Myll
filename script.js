document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon"); // Botón ☰
    const menu = document.querySelector(".nav-menu"); // Menú
    const menuLinks = document.querySelectorAll(".nav-menu a"); // Links del menú

    // Alternar el menú
    function toggleMenu() {
        menu.classList.toggle("active");
    }

    // Evento para abrir/cerrar el menú
    menuIcon.addEventListener("click", toggleMenu);

    // Cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active");
        });
    });
});

// Función para abrir el modal
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imageSrc;
    modal.style.display = "flex"; // Asegurar que el modal se muestra correctamente
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

import { supabase } from './supabase.js';

// Función para agregar productos al carrito
async function addToCart(productId, productName, quantity) {
    const userId = 1; // Reemplaza con el ID del usuario autenticado, si lo tienes.

    const response = await fetch('http://localhost:3000/api/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id: userId, product_id: productId, quantity: quantity }),
    });

    const data = await response.json();

    if (response.ok) {
        alert(`${productName} agregado al carrito con éxito. Cantidad: ${quantity}`);
    } else {
        alert(`Error: ${data.error}`);
    }
}

// Función para registrar un nuevo usuario
async function registerUser() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar que los campos no estén vacíos
    if (!email || !password) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        alert('Error al registrarse: ' + error.message);
    } else {
        alert('Usuario registrado exitosamente: ' + user.email);
    }
}
