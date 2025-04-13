/**
 * @fileoverview Controlador de la interfaz de usuario
 * @module ui/uiController
 * @requires module:services/dataService
 * @requires module:utils/helpers
 * @requires module:constants
 */

import { getBrands, getModels } from '../services/dataService.js';
import { debounce } from '../utils/helpers.js';
import { DOM_ELEMENTS, TEMPLATES, SYMBOLS } from '../constants/index.js';

/**
 * Carga las marcas disponibles en el select
 * @async
 * @function loadBrands
 * @returns {Promise<void>}
 * @throws {Error} Si hay un error al cargar las marcas
 */
export const loadBrands = async () => {
    try {
        DOM_ELEMENTS.MARCA_SELECT.disabled = true;
        const brands = await getBrands();

        if (!brands.length) {
            DOM_ELEMENTS.MARCA_SELECT.innerHTML = '<option value="">No hay marcas disponibles</option>';
            return;
        }

        DOM_ELEMENTS.MARCA_SELECT.innerHTML = `
            ${TEMPLATES.EMPTY_OPTION}
            ${brands.map(brand => `<option value="${brand}">${brand}</option>`).join('')}
        `;
    } catch (error) {
        console.error('Error al cargar marcas:', error);
        DOM_ELEMENTS.MARCA_SELECT.innerHTML = '<option value="">Error al cargar marcas</option>';
    } finally {
        DOM_ELEMENTS.MARCA_SELECT.disabled = false;
    }
};

/**
 * Renderiza un modelo individual como fila de la tabla
 * @private
 * @function renderModel
 * @param {Object} model - Datos del modelo de zapatilla
 * @param {string} model.modelo - Nombre del modelo
 * @param {boolean} model.pista - Indica si es apta para pista
 * @param {boolean} model.saltos - Indica si es apta para saltos
 * @param {boolean} model.lanzamientos - Indica si es apta para lanzamientos
 * @param {boolean} model.asfalto - Indica si es apta para asfalto
 * @param {boolean} model.cross - Indica si es apta para cross
 * @returns {string} HTML de la fila del modelo
 */
const renderModel = (model) => {
    return `
        <li>
            ${model.modelo}
            <img
                src="src/img/logo.png"
                alt="${model.modelo}"
                class="icon"
                onclick="window.open('https://www.google.com/search?q=${encodeURIComponent(DOM_ELEMENTS.MARCA_SELECT.value + ' ' + model.modelo)}&tbm=isch', '_blank')">
        </li>
        <li class="${model.pista ? 'success' : 'error'}">${model.pista ? SYMBOLS.CHECK : SYMBOLS.CROSS}</li>
        <li class="${model.saltos ? 'success' : 'error'}">${model.saltos ? SYMBOLS.CHECK : SYMBOLS.CROSS}</li>
        <li class="${model.lanzamientos ? 'success' : 'error'}">${model.lanzamientos ? SYMBOLS.CHECK : SYMBOLS.CROSS}</li>
        <li class="${model.asfalto ? 'success' : 'error'}">${model.asfalto ? SYMBOLS.CHECK : SYMBOLS.CROSS}</li>
        <li class="${model.cross ? 'success' : 'error'}">${model.cross ? SYMBOLS.CHECK : SYMBOLS.CROSS}</li>
    `;
};

/**
 * Muestra los modelos de la marca seleccionada
 * @async
 * @function displayModels
 * @returns {Promise<void>}
 * @throws {Error} Si hay un error al mostrar los modelos
 */
export const displayModels = async () => {
    try {
        const brand = DOM_ELEMENTS.MARCA_SELECT.value;
        
        // Si no hay marca seleccionada, mostrar solo la cabecera
        if (!brand) {
            DOM_ELEMENTS.LIST_MODELS.innerHTML = TEMPLATES.TABLE_HEADER;
            return;
        }

        DOM_ELEMENTS.LIST_MODELS.innerHTML = '<p class="loading">Cargando...</p>';
        const models = await getModels(brand);
        
        DOM_ELEMENTS.MARCA_SELECTED.innerHTML = models.length ? `${brand} (${models.length})` : 'Marca';
        
        if (!models.length) {
            DOM_ELEMENTS.LIST_MODELS.innerHTML = '<p class="no-results">No hay modelos disponibles para esta marca</p>';
            return;
        }

        // Mostrar cabecera y modelos
        DOM_ELEMENTS.LIST_MODELS.innerHTML = TEMPLATES.TABLE_HEADER.replace('</ul>', 
            `${models.map(renderModel).join('')}</ul>`
        );
    } catch (error) {
        console.error('Error al mostrar modelos:', error);
        DOM_ELEMENTS.LIST_MODELS.innerHTML = '<p class="error">Error al cargar los modelos</p>';
    }
};

/**
 * Versión con debounce de displayModels para mejor rendimiento
 * @function debouncedDisplayModels
 * @type {Function}
 */
export const debouncedDisplayModels = debounce(displayModels, 300);

/**
 * Actualiza el año en el footer
 * @function updateYear
 * @returns {void}
 */
export const updateYear = () => {
    const year = new Date().getFullYear();
    if (DOM_ELEMENTS.ACTUAL_YEAR) {
        DOM_ELEMENTS.ACTUAL_YEAR.textContent = year;
    } else {
        console.warn('Elemento #actualYear no encontrado');
    }
};

// Event listeners
DOM_ELEMENTS.MARCA_SELECT.addEventListener('change', debouncedDisplayModels); 