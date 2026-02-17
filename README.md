# 🌊 Ingenieria en Jaque: De Ribadelago a Aznalcóllar
> Visualización narrativa sobre catástrofes hidrológicas en España.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-success)
![Mapbox](https://img.shields.io/badge/Mapbox-GL%20JS-blue)
![Scrollama](https://img.shields.io/badge/Scrollama.js-yellow)

Este proyecto es una experiencia de **scrollytelling** (narrativa con scroll) que explora tres grandes tragedias en España provocadas por el fallo de infraestructuras hidráulicas: **Ribadelago (1959)**, **Tous (1982)** y **Aznalcóllar (1998)**.

Utiliza la tecnología de mapas interactivos de Mapbox combinada con una narrativa visual inmersiva.

## 📸 Vistas Previas

*(Puedes subir capturas de pantalla de tu mapa a la carpeta assets y descomentar estas líneas)*

## ✨ Características Principales

* **Mapa Interactivo 3D:** Uso de Mapbox GL JS con terreno 3D activado para visualizar la orografía de los desastres.
* **Narrativa Guiada:** Desplazamiento suave entre ubicaciones geográficas sincronizado con el texto (Scrollytelling).
* **Carrusel de Imágenes Personalizado:** Implementación de una galería de fotos histórica con transición automática y pies de foto.
* **Diseño Responsive:** Adaptado para funcionar en escritorio y dispositivos móviles.
* **Estilo Dark Mode:** Estética elegante y dramática con tipografías modernas (Lato/Montserrat).

## 🛠️ Tecnologías Usadas

* **[Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/):** Renderizado de mapas vectoriales y terreno 3D.
* **[Scrollama.js](https://github.com/russellgoldenberg/scrollama):** Librería ligera para gestionar los eventos de scroll.
* **HTML5 / CSS3:** Estilos personalizados, animaciones CSS y diseño responsivo.
* **JavaScript (ES6):** Lógica de control del mapa y del carrusel de imágenes.

## 🚀 Instalación y Uso Local

Para ejecutar este proyecto en tu ordenador:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git](https://github.com/TU_USUARIO/NOMBRE_DEL_REPO.git)
    ```
2.  **Configurar el Token:**
    Abre el archivo `config.js` y asegúrate de que tu `accessToken` de Mapbox es válido.
    ```javascript
    accessToken: 'pk.eyJ1Ijoi...'
    ```
3.  **Ejecutar:**
    Debido a las políticas de seguridad de los navegadores (CORS) y WebGL, es recomendable usar un servidor local en lugar de abrir el archivo `index.html` directamente.
    * **Opción A (VS Code):** Instala la extensión "Live Server", haz clic derecho en `index.html` y selecciona "Open with Live Server".
    * **Opción B (Python):** Abre la terminal en la carpeta y ejecuta `python -m http.server`.

## ⚙️ Configuración (config.js)

Todo el contenido de la historia se gestiona desde `config.js` sin tocar el HTML.

### Estructura de Capítulos
Cada objeto dentro del array `chapters` representa una diapositiva:

```javascript
{
    id: 'ribadelago',
    title: 'Título del capítulo',
    // Opción A: Galería de imágenes (Carrusel)
    gallery: [
        { src: './assets/foto1.jpg', caption: 'Pie de foto 1' },
        { src: './assets/foto2.jpg', caption: 'Pie de foto 2' }
    ],
    // Opción B: Imagen única
    // image: './assets/foto_unica.jpg',
    description: 'Texto narrativo...',
    location: {
        center: [-6.77959, 42.17898], // Coordenadas [Lng, Lat]
        zoom: 14.5,
        pitch: 70, // Inclinación 3D
        bearing: 25 // Rotación
    }
}
