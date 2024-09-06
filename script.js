// script.js

document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // Agrega la clase 'visible' para activar la animación
    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});
