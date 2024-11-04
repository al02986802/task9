// script.js
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');

            // Cargar la vista seleccionada
            fetch(href)
                .then(response => response.text())
                .then(html => {
                    document.querySelector('.content-wrapper section.content').innerHTML = html;
                });

            // Actualizar el estado activo en el menú
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
