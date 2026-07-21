// Tour interactivo con Driver.js para el Dashboard
// Guía paso a paso para nuevos usuarios

import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

const iniciarTour = () => {
    const tour = driver({
        showProgress: true,
        steps: [
            {
                element: '#sidebar',
                popover: {
                    title: 'Sidebar de Navegación',
                    description: 'Desde aquí puedes navegar entre tus proyectos, crear nuevos proyectos y acceder a tu perfil.',
                    position: 'right'
                }
            },
            {
                element: '.crear-proyecto',
                popover: {
                    title: 'Crear Proyecto',
                    description: 'Haz clic aquí para crear un nuevo proyecto y comenzar a agregar tareas.',
                    position: 'bottom'
                }
            },
            {
                element: '.nombre-pagina',
                popover: {
                    title: 'Tus Proyectos',
                    description: 'Aquí verás el nombre de la página actual. Cuando tengas proyectos, aparecerán en la lista de abajo.',
                    position: 'bottom'
                }
            }
        ]
    });
    
    tour.drive();
};

// Verificar si es la primera visita y mostrar tour automáticamente
const mostrarTourBienvenida = () => {
    const tourMostrado = localStorage.getItem('uptask_tour_mostrado');
    
    if (!tourMostrado) {
        // Esperar a que el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', iniciarTour);
        } else {
            iniciarTour();
        }
        localStorage.setItem('uptask_tour_mostrado', 'true');
    }
};

// Botón para reiniciar el tour manualmente
const agregarBotonTour = () => {
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) {
        const botonTour = document.createElement('button');
        botonTour.id = 'btn-tour';
        botonTour.className = 'boton-tour';
        botonTour.innerHTML = '🎯 Tour de Bienvenida';
        botonTour.addEventListener('click', () => {
            iniciarTour();
        });
        sidebar.appendChild(botonTour);
    }
};

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Solo mostrar en dashboard
    if (window.location.pathname === '/dashboard' || window.location.pathname === '/dashboard/') {
        mostrarTourBienvenida();
        agregarBotonTour();
    }
});