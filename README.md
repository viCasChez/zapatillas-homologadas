# Zapatillas Homologadas

Este proyecto está diseñado para crear una página interactiva que muestra un listado de zapatillas homologadas para diferentes disciplinas deportivas. Ayuda a los usuarios a identificar qué zapatillas están aprobadas para distintas modalidades como pista, saltos, lanzamientos, asfalto y cross.

## 🎯 Objetivos
- Proporcionar información clara sobre zapatillas homologadas.
- Facilitar la búsqueda por marca.
- Mostrar de forma visual las características homologadas de cada modelo.
- Crear una interfaz intuitiva y fácil de usar.

## ✨ Características
- **🔍 Filtrado por Marca:** Permite seleccionar una marca específica para ver sus modelos.
- **📊 Visualización de Características:** Muestra para cada modelo:
  - Nombre del modelo
  - Homologación para pista
  - Homologación para saltos
  - Homologación para lanzamientos
  - Homologación para asfalto
  - Homologación para cross
- **✅ Indicadores Visuales:** Uso de símbolos (✓/✗) para indicar características homologadas.
- **🔄 Carga Dinámica:** Los datos se cargan dinámicamente y se actualizan automáticamente.
- **⚡ Optimización de Rendimiento:** Implementación de debounce para mejorar la experiencia de usuario.

## 🛠️ Tecnologías Utilizadas
- **JavaScript (ES6+):** Para la lógica de la aplicación
- **HTML5:** Para la estructura del contenido
- **CSS3:** Para los estilos y diseño responsivo
- **Módulos ES6:** Para una arquitectura modular y mantenible

## 🚀 Instalación y Configuración

1.- ### Clonar el repositorio:
git clone https://github.com/viCasChez/vi-zapatillas-homologadas
cd vi-zapatillas-homologadas

2.- ### Estructura del Proyecto:
src/
├── js/
│   ├── constants/     # Constantes y configuración
│   ├── services/      # Servicios de datos
│   ├── ui/           # Controladores de UI
│   └── utils/        # Utilidades y helpers
├── css/              # Estilos
└── data/            # Datos JSON


## 🧩 Módulos Principales

### 1. **Controlador UI (uiController.js)**
- Gestiona la interacción con el usuario
- Maneja la visualización de datos
- Implementa el debounce para optimización

### 2. **Servicio de Datos (dataService.js)**
- Obtiene y procesa los datos de zapatillas
- Filtra y valida la información
- Gestiona las marcas y modelos

### 3. **Utilidades (helpers.js)**
- Proporciona funciones de utilidad
- Implementa validación de datos
- Ofrece funciones de optimización

### 4. **Constantes (constants/index.js)**
- Define configuración global
- Mantiene templates HTML
- Gestiona referencias DOM

## 📖 Funcionalidades Principales

1. **Carga de Marcas**
   - Obtención dinámica de marcas disponibles
   - Actualización automática del selector

2. **Visualización de Modelos**
   - Muestra modelos por marca seleccionada
   - Indica características homologadas
   - Proporciona feedback visual claro

3. **Gestión de Estados**
   - Manejo de estados de carga
   - Gestión de errores
   - Feedback al usuario

## 🔧 Configuración de Desarrollo

### Requisitos Previos:
- Servidor web local (puede usar Live Server de VS Code)
- Navegador moderno con soporte para ES6+

### Ejecución Local:
1. Inicia tu servidor web local
2. Abre el archivo index.html
3. La aplicación se cargará automáticamente

## 📚 Documentación

El código está completamente documentado usando JSDoc. Principales secciones:

- **Módulos:** Documentación a nivel de archivo
- **Funciones:** Descripción, parámetros y retornos
- **Tipos:** Definiciones de tipos personalizados
- **Constantes:** Configuración y valores constantes

## 🤝 Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🌐 Demo

- **URL del Repositorio:** https://github.com/viCasChez/vi-zapatillas-homologadas
- **GitHub Pages:** https://vicaschez.github.io/vi-zapatillas-homologadas/

---

Desarrollado por vi.