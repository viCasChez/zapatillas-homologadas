/**
 * @fileoverview Constantes globales de la aplicación
 * @module constants
 */

/**
 * Configuración de la API
 * @constant {Object}
 * @property {string} DATA_URL - URL del archivo JSON con los datos
 */
export const API = {
    DATA_URL: 'data/data.json'
};

/**
 * Referencias a elementos del DOM
 * @constant {Object}
 * @property {HTMLSelectElement} MARCA_SELECT - Select de selección de marca
 * @property {HTMLElement} LIST_MODELS - Contenedor de la lista de modelos
 * @property {HTMLElement} ACTUAL_YEAR - Elemento para mostrar el año actual
 */
export const DOM_ELEMENTS = {
    MARCA_SELECT: document.querySelector('#marca'),
    MARCA_SELECTED: document.querySelector('#selected-marca'),
    LIST_MODELS: document.querySelector('.list-models'),
    ACTUAL_YEAR: document.querySelector('#actualYear')
};

/**
 * Templates HTML reutilizables
 * @constant {Object}
 * @property {string} EMPTY_OPTION - Opción vacía para el select
 * @property {string} TABLE_HEADER - Cabecera de la tabla de modelos
 */
export const TEMPLATES = {
    EMPTY_OPTION: '<option value="">Selecciona una marca</option>',
    TABLE_HEADER: `
        <ul>
            <li>Modelo</li>
            <li>Pista</li>
            <li>Saltos</li>
            <li>Lanzamientos</li>
            <li>Asfalto</li>
            <li>Cross</li>
        </ul>
    `
};

/**
 * Símbolos para indicadores visuales
 * @constant {Object}
 * @property {string} CHECK - Símbolo para indicar característica presente
 * @property {string} CROSS - Símbolo para indicar característica ausente
 */
export const SYMBOLS = {
    CHECK: '✓',
    CROSS: '✗'
}; 