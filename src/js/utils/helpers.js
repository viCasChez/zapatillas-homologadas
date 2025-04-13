/**
 * @fileoverview Utilidades y funciones helper
 * @module utils/helpers
 */

/**
 * Función para manejar errores de forma consistente
 * @param {Function} fn - Función a ejecutar
 * @param {string} errorMessage - Mensaje de error personalizado
 * @returns {Promise} Promesa con el resultado o error manejado
 */
export const errorHandler = async (fn, errorMessage) => {
    try {
        return await fn();
    } catch (error) {
        console.error(`${errorMessage}:`, error);
        throw new Error(errorMessage);
    }
};

/**
 * Función debounce para evitar múltiples llamadas
 * @function debounce
 * @param {Function} fn - Función a ejecutar
 * @param {number} [delay=300] - Tiempo de espera en milisegundos
 * @returns {Function} Función con debounce aplicado
 */
export const debounce = (fn, delay = 300) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

/**
 * Valida un objeto zapatilla
 * @function validateZapatilla
 * @param {Object} zapatilla - Objeto zapatilla a validar
 * @param {string} zapatilla.marca - Nombre de la marca
 * @param {string} zapatilla.modelo - Nombre del modelo
 * @param {boolean} zapatilla.pista - Indica si es apta para pista
 * @param {boolean} zapatilla.saltos - Indica si es apta para saltos
 * @param {boolean} zapatilla.lanzamientos - Indica si es apta para lanzamientos
 * @param {boolean} zapatilla.asfalto - Indica si es apta para asfalto
 * @param {boolean} zapatilla.cross - Indica si es apta para cross
 * @returns {boolean} True si el objeto es válido
 */
export const validateZapatilla = (zapatilla) => {
    const requiredFields = ['marca', 'modelo', 'pista', 'saltos', 'lanzamientos', 'asfalto', 'cross'];
    const hasAllFields = requiredFields.every(field => field in zapatilla);
    
    if (!hasAllFields) return false;

    const booleanFields = ['pista', 'saltos', 'lanzamientos', 'asfalto', 'cross'];
    const hasValidBooleans = booleanFields.every(field => typeof zapatilla[field] === 'boolean');

    return hasValidBooleans && 
           typeof zapatilla.marca === 'string' && 
           typeof zapatilla.modelo === 'string' &&
           zapatilla.marca.length > 0 &&
           zapatilla.modelo.length > 0;
}; 