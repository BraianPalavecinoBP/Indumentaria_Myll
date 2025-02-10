document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll("#menu ul li a"); // Seleccionamos los enlaces

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        menu.classList.toggle("active");
    }

    // Evento para abrir/cerrar el menú con el botón ☰
    menuToggle.addEventListener("click", toggleMenu);

    // Evento para cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active"); // Se oculta el menú
        });
    });
});


