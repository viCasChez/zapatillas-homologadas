/**
 * @fileoverview Punto de entrada principal de la aplicación
 * @module main
 * @requires module:ui/uiController
 */

import { loadBrands, updateYear } from './ui/uiController.js';

/**
 * Inicializa la aplicación cargando las marcas y actualizando el año
 * @async
 * @function init
 * @returns {Promise<void>}
 * @throws {Error} Si hay un error durante la inicialización
 */
const init = async () => {
    try {
        await loadBrands();
        updateYear();
    } catch (error) {
        console.error('Error al inicializar la aplicación:', error);
    }
};

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init); 