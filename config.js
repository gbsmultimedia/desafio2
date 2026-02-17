var config = {
    // Estilo del mapa
    style: 'mapbox://styles/guillebs/cmlqcrkki005b01sac05vd206',
    accessToken: 'pk.eyJ1IjoiZ3VpbGxlYnMiLCJhIjoiY21scDl5ZWcxMDE5YTNocjMxb3Vub2VmdiJ9.6oq7wZxsdPCxhMdvlHzBHA',
    
    showMarkers: false,
    markerColor: '#E74C3C',
    
    inset: false, 
    theme: 'dark', 
    use3dTerrain: true, 
    
    title: 'Ingenieria en Jaque: De Ribadelago a Aznalcóllar',
    subtitle: 'Tres tragedias hidrológicas marcadas por el fallo humano y la fuerza de la naturaleza en España',
    byline: 'Desafio 2 - Guillermo Bravo',
    footer: 'Fuente: Datos históricos y registros oficiales, Fotos: Wikipeida, El Norte de Castilla, Las Provincias, Noticias CV, EL Mundo, El Confidencial, Reuters . Visualización creada con Mapbox Storytelling.',
    
    chapters: [
        {
            id: 'ribadelago',
            alignment: 'left',
            hidden: false,
            title: '1959: La tragedia de Ribadelago',
            // CARRUSEL CON RUTAS LOCALES
            gallery: [
                {
                    src: './assets/ribadelago1.jpg',
                    caption: 'Estado actual de la rotura en la Presa de Vega de Tera. Foto: Wikipedia - Raiden 32 '
                },
                {
                    src: './assets/ribadelago2.webp', 
                    caption: 'El pueblo arrasado tras la catástrofe. Foto: El Norte de Castilla'
                },
                {
                    src: './assets/ribadelago3.webp',
                    caption: 'Labores de rescate en 1959. Foto: El Norte de Castilla'
                }
            ],
            description: 'En la madrugada del 9 de enero del 1959, el muro de la presa de Vega de Tera colapsó. <b>8 millones de metros cúbicos de agua</b> arrasaron el pueblo de Ribadelago en Zamora. El saldo fue devastador: 144 fallecidos en uno de los desastres más dolorosos de la posguerra española.',
            location: {
                center: [-6.77959, 42.17898],
                zoom: 12,
                pitch: 70, 
                bearing: 25
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tous',
            alignment: 'right',
            hidden: false,
            title: '1982: La Pantanada de Tous',
            // CARRUSEL CON RUTAS LOCALES
            gallery: [
                {
                    src: './assets/tous2.jpg',
                    caption: 'Colapso de la presa de Tous. Foto: Noticias CV '
                },
                {
                    src: './assets/tous3.jpg', 
                    caption: 'Desperfectos provocados por el agua. Foto: Las Provincias'
                },
                {
                    src: './assets/tous4.jpg',
                    caption: 'Efectos de la "pantanada de Tous" en Carcaixent. Foto: Las Provincias'
                }
            ], 
            description: 'La tarde del 20 de octubre de 1982, la "Gota Fría" (DANA) puso a prueba la presa de Tous en Valencia. El desbordamiento y posterior rotura de la presa liberó una ola imparable que anegó la comarca de la Ribera. Más de 30 víctimas y miles de damnificados.',
            location: {
                center: [-0.65091, 39.13277],
                zoom: 13,
                pitch: 50,
                bearing: -15
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'aznalcollar',
            alignment: 'left',
            hidden: false,
            title: '1998: El desastre de Aznalcóllar',
             // CARRUSEL CON RUTAS LOCALES
            gallery: [
                {
                    src: './assets/aznal1.jpg',
                    caption: 'Rotura del dique de contención en el complejo minero. Foto: El Confidencial '
                },
                {
                    src: './assets/aznal2.jpg', 
                    caption: 'Operario trabajando. Foto: Reuters'
                },
                {
                    src: './assets/aznal3.jpg',
                    caption: 'Operarorios retiran peces muertos en el rio Guardamar. Foto: El Mundo'
                }
            ],
            description: 'El desastre ambiental comenzó la madrugada del 25 de abril de 1998. No fue agua limpia, sino lodo tóxico. La rotura de la balsa minera de Boliden vertió metales pesados al río Guadiamar, amenazando el corazón de Doñana.',
            location: {
                center: [-6.2483, 37.5186],
                zoom: 13.5,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};