/**
 * @fileoverview Servicio para manejar los datos de zapatillas
 * @module services/dataService
 * @requires module:constants
 * @requires module:utils/helpers
 */

import { API } from '../constants/index.js';
import { validateZapatilla } from '../utils/helpers.js';

/**
 * Obtiene y procesa los datos del JSON
 * @private
 * @async
 * @function getData
 * @returns {Promise<Array<Object>>} Array de zapatillas validadas
 * @throws {Error} Si hay un error al obtener o procesar los datos
 */
const getData = async () => {
    try {
        const response = await fetch(API.DATA_URL);
        const data = await response.json();
        return data.filter(validateZapatilla);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return [];
    }
};

/**
 * Obtiene las marcas disponibles
 * @async
 * @function getBrands
 * @returns {Promise<string[]>} Array de marcas únicas ordenadas alfabéticamente
 */
export const getBrands = async () => {
    const data = await getData();
    return [...new Set(data.map(item => item.marca))].sort();
};

/**
 * Obtiene los modelos de una marca específica
 * @async
 * @function getModels
 * @param {string} marca - Nombre de la marca
 * @returns {Promise<Array<Object>>} Array de modelos de la marca especificada
 */
export const getModels = async (marca) => {
    if (!marca) return [];
    const data = await getData();
    return data.filter(item => item.marca === marca);
}; 