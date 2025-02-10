document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon"); // Selecciona el botón ☰
    const menu = document.querySelector(".nav-menu"); // Selecciona el menú
    const menuLinks = document.querySelectorAll(".nav-menu a"); // Selecciona los enlaces dentro del menú

    // Función para alternar el menú
    function toggleMenu() {
        menu.classList.toggle("active");
    }

    // Evento para abrir/cerrar el menú con el botón ☰
    menuIcon.addEventListener("click", toggleMenu);

    // Evento para cerrar el menú al hacer clic en un enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active"); // Se oculta el menú
        });
    });
});
