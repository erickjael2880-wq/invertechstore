const productos = [
    // --- CELULARES ---
    {
        id: 1, nombre: "iPhone Pro Max", categoria: "celulares", precio: 7999,
        imagen: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_09142021_inline.jpg.large.jpg",
        descripcion: "Smartphone para fotografía, comunicación y entretenimiento.",
        caracteristicas: ["Pantalla de alta resolución", "Cámara integrada", "Wi-Fi y Bluetooth"],
        ram: "8 GB", almacenamiento: "256 GB", pantalla: "Super Retina XDR OLED", bateria: "4352 mAh"
    },
    {
        id: 2, nombre: "Samsung Galaxy", categoria: "celulares", precio: 6500,
        imagen: "https://images.samsung.com/is/image/samsung/assets/africa_en/f2607/all_about_galaxy/og_1200x630.jpg?$ORIGIN_JPG$",
        descripcion: "Celular moderno para aplicaciones, fotos y videos.",
        caracteristicas: ["Pantalla táctil", "Cámara integrada", "Conexión Wi-Fi"],
        ram: "6 GB", almacenamiento: "128 GB", pantalla: "Dynamic AMOLED 2X", bateria: "4000 mAh"
    },
    {
        id: 3, nombre: "Xiaomi Redmi", categoria: "celulares", precio: 9800,
        imagen: "https://i02.appmifile.com/30_operatorx_operatorx_opx/24/06/2024/965dad479bbe458c5119d225cea6ba5e.png?thumb=1&w=400&q=85",
        descripcion: "Smartphone para tareas cotidianas y redes sociales.",
        caracteristicas: ["Pantalla táctil", "Batería recargable", "Conectividad inalámbrica"],
        ram: "8 GB", almacenamiento: "256 GB", pantalla: "AMOLED 120Hz", bateria: "5000 mAh"
    },
    {
        id: 29, nombre: "M-Horse A17", categoria: "celulares", precio: 7200,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkOXg66Ztjlk8pMG8di6MrODHuEmkqOQziZzKPI0gxuuiwjsJIKy_kidR&s=10",
        descripcion: "Smartphone avanzado con inteligencia artificial y excelente cámara.",
        caracteristicas: ["Cámara de alta gama", "Procesador Tensor", "Actualizaciones garantizadas"],
        ram: "12 GB", almacenamiento: "128 GB", pantalla: "LTPO OLED 120Hz", bateria: "5050 mAh"
    },
    {
        id: 30, nombre: "Motorola Edge", categoria: "celulares", precio: 5900,
        imagen: "https://m.media-amazon.com/images/I/61TE0qpbLQL._AC_UY327_FMwebp_QL65_.jpg",
        descripcion: "Celular con pantalla curva y gran fluidez para uso diario.",
        caracteristicas: ["Diseño elegante", "Carga rápida TurboPower", "Sonido Dolby Atmos"],
        ram: "8 GB", almacenamiento: "256 GB", pantalla: "pOLED Curva 144Hz", bateria: "4400 mAh"
    },
     {
        id: 118, nombre: "Kikx", categoria: "celulares", precio: 950,
        imagen: "https://intercompras.com/images/product/KAIOS_27_CEL_KAIOS_K-FLIP_250926140945.jpg",
        descripcion: " celular tipo concha diseñado para usuarios que buscan un dispositivo funcional y sencillo con tecnología eficiente.",
        caracteristicas: ["Diseño tipo concha", "Procesador Dual Core"],
        ram: "512MB", almacenamiento: "4GB", pantalla: " 2.4 pulgadas", bateria: "2400 mAh"
    },
    {
        id: 119, nombre: "M HORSE S26 ULTRA MAX", categoria: "celulares", precio: 7000,
        imagen: "https://sis.omega.com.do/ProductImages/212d0c58-c5a9-4abc-80ec-0a1c76ca0107.png",
        descripcion: " Smartphone avanzado con inteligencia artificial y excelente cámara.",
        caracteristicas: ["pantalla tactil", "conectividad inalambrica"],
        ram: "8GB", almacenamiento: "128GB", pantalla: "6.8 pulgadas", bateria: "5000mAh"
    },
    {
        id: 120, nombre: "M HORSE 17 pro", categoria: "celulares", precio: 8000 ,
        imagen: "https://www.depotiendard.com/wp-content/uploads/2-171.jpg",
        descripcion: "M17 Pro Max) es un teléfono inteligente económico que destaca por replicar la estética y el diseño de alta gama de un iPhone , pero funcionando con sistema operativo Android",
        caracteristicas: ["dependiendo la capacidad s rango de precio amenta (64-128)"],
        ram: "12GB", almacenamiento: "128GB ", pantalla: " Entre 6.6 y 6.8 HD+", bateria: "5000 mAh"
    },
     {
        id: 121, nombre: "M-horse 18 pro max", categoria: "celulares", precio: 7700 ,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjDYrkTFfSP1K2jUYpN1hRw-_HWJ6pSfbuk1cbr98NA&s=10",
        descripcion: "teléfono inteligente económico con diseño inspirado en la estética Pro Max",
        caracteristicas: ["dependiendo la capacidad s rango de precio amenta (64-128)"],
        ram: "8GB", almacenamiento: "128GB", pantalla: "6.6 pulgadas HD+", bateria: "5000 mAh"
    },
     {
        id: 122 , nombre: "Oukitel C26 ", categoria: "celulares", precio:5000 ,
        imagen: "https://cdn.atacadoconnect.com/produtos/1359640/smartphone-oukitel-c26-128gb-4gb-ram-dual-sim-tela-663-dourado-1359640-r1egv.webp",
        descripcion: "destaca por su diseño delgado, gran pantalla y batería de larga duración",
        caracteristicas: ["Viene con Android 16 de fábrica (incluye funciones de asistencia con inteligencia artificial según la versión)"],
        ram: "6 GB", almacenamiento: "128 GB", pantalla: "6.63 pulgadas con resolución HD+", bateria: "5150 mAh"
    },
{
        id: 123, nombre: "Oukitel C69", categoria: "celulares", precio: 5500,
        imagen: "https://oukitel.com/cdn/shop/files/6dd5063284b8ea462bcf3d348f46db07.jpg?v=1777338908&width=1000",
        descripcion: "un teléfono inteligente económico enfocado en ofrecer una pantalla muy grande y una batería de gran capacidad",
        caracteristicas: [""],
        ram: " 8 GB", almacenamiento: "256 GB o 512 GB", pantalla: " IPS LCD de 7.2 pulgadas con resolución HD+", bateria: "6000 mAh "
    },
    {
        id: 124, nombre: "Oukitel C61", categoria: "celulares", precio: 9000,
        imagen: "https://www.depotiendard.com/wp-content/uploads/1-374.jpg",
        descripcion: "Es un teléfono inteligente económico de gama de entrada presentado con Android 15",
        caracteristicas: [""],
        ram: "4GB", almacenamiento: " 128 GB", pantalla: "IPS LCD de 6.88 pulgadas con resolución HD+", bateria: "5150 mAh"
    },
    {
        id: 125, nombre: "Oukitel C59", categoria: "celulares", precio: 9600,
        imagen: "https://oukitel.store/cdn/shop/files/6__4_1.webp?v=1769753996&width=300",
        descripcion: "Es un teléfono inteligente económico enfocado en la gran autonomía de batería y resistencia básica",
        caracteristicas: [""],
        ram: "8 GB", almacenamiento: "256 GB", pantalla: " IPS LCD de 6.88 pulgadas con resolución HD+", bateria: "10,000 mAh"
    },
    {
        id: 126, nombre: "OUKITEL C1", categoria: "celulares", precio: 8700,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4_yNc4yphKDraYLh8a0P1qlUHOAh-4_dE93_hC5PO6wSnwmV4XUihdDM&s=10",
        descripcion: "teléfono inteligente de gama de entrada con Android 15.",
        caracteristicas: [""],
        ram: "4 GB", almacenamiento: "128 GB", pantalla: "IPS LCD de 6.52 pulgadas", bateria: "5150 mAh"
    },

    // --- LAPTOPS ---
    {
        id: 4, nombre: "Laptop DELL i7", categoria: "laptops", precio: 12000,
        imagen: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/dell-15-intel-3530/media-gallery/laptop-dell-dc15250nt-sl-plastic-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1254&qlt=100,0&resMode=sharp2&size=1254,804",
        descripcion: "Laptop para estudiar, trabajar y usar aplicaciones.",
        caracteristicas: ["Pantalla integrada", "Teclado", "Configuración por confirmar"],
        ram: "16 GB", almacenamiento: "512 GB SSD", pantalla: "Full HD IPS de 15.6 pulgadas", bateria: "41 Whr"
    },
    {
        id: 5, nombre: "ELITEBOOK", categoria: "laptops", precio: 10500,
        imagen: "https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/laptops-and-2-in-1s/new/bf-updates/media@2x1.jpg",
        descripcion: "Computadora portátil para estudios y oficina.",
        caracteristicas: ["Diseño portátil", "Pantalla integrada", "Teclado y panel táctil"],
        ram: "8 GB", almacenamiento: "256 GB SSD", pantalla: "HD de 14 pulgadas", bateria: "3 celdas 41 Wh"
    },
    {
        id: 6, nombre: "MacBook Pro", categoria: "laptops", precio: 25000,
        imagen: "https://www.apple.com/v/macbook-pro/ax/images/overview/welcome/hero_endframe__fwev9ebh42mq_xlarge.jpg",
        descripcion: "Computadora portátil de Apple para productividad.",
        caracteristicas: ["Diseño compacto", "Pantalla integrada", "Modelo por confirmar"],
        ram: "18 GB", almacenamiento: "512 GB SSD", pantalla: "Liquid Retina XDR de 14 pulgadas", bateria: "Hasta 18 horas"
    },
    {
        id: 34, nombre: "Laptop Lenovo ThinkPad", categoria: "laptops", precio: 13500,
        imagen: "https://m.media-amazon.com/images/I/812fGPdp2gL._AC_SX679_.jpg",
        descripcion: "Portátil empresarial ultrarresistente con teclado ergonómico.",
        caracteristicas: ["Seguridad avanzada con lector de huellas", "Durabilidad militar", "Gran autonomía"],
        ram: "16 GB", almacenamiento: "512 GB SSD", pantalla: "IPS Full HD de 14 pulgadas", bateria: "52.5 Whr"
    },
    {
        id: 35, nombre: "Laptop ASUS Vivobook", categoria: "laptops", precio: 9800,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6TausI2My6ymWS1eIS2rg5EhiJEpeiaqr7GCif-CDA&s=10",
        descripcion: "Laptop moderna y ligera ideal para estudiantes y creadores de contenido.",
        caracteristicas: ["Diseño delgado", "Pantalla NanoEdge", "Carga rápida"],
        ram: "8 GB", almacenamiento: "512 GB SSD", pantalla: "OLED de 15.6 pulgadas", bateria: "42 Whr"
    },

    // --- ACCESORIOS ---
    {
        id: 39, nombre: "Smartwatch Deportivo Pro", categoria: "accesorios", precio: 2500,
        imagen: "https://images-na.ssl-images-amazon.com/images/I/61hDZx1bOoL._AC_UL900_SR900,600_.jpg",
        descripcion: "Reloj inteligente con monitor de ritmo cardíaco y GPS integrado.",
        caracteristicas: ["Resistencia al agua 5ATM", "Modos multideporte", "Notificaciones"]
    },
    {
        id: 40, nombre: "Audífonos Inalámbricos ANC", categoria: "auriculares", precio: 1000,
        imagen: "https://resources.sears.com.mx/medios-plazavip/t1/1714413626IMG202404291154441300x1300pxeljpg?scale=500&qlty=75",
        descripcion: "Auriculares de diadema con cancelación activa de ruido.",
        caracteristicas: ["Bluetooth 5.3", "Almohadillas ultra suaves", "Micrófono dual HD"]
    },
    {
        id: 41, nombre: "Power Bank 20000mAh", categoria: "accesorios", precio: 1100,
        imagen: "https://m.media-amazon.com/images/I/71RoSfN6M3L._AC_SY300_SX300_QL70_FMwebp_.jpg",
        descripcion: "Batería externa portátil de carga rápida con múltiples puertos.",
        caracteristicas: ["Salida USB-C y USB-A", "Pantalla LED indicadora", "Protección contra sobrecarga"]
    },
    {
        id: 42, nombre: "Lapara Tecno sputnik", categoria: "accesorios", precio: 950,
        imagen: "https://alawao.com/wp-content/uploads/2025/08/cuba-alimentos-restaurantes-viajes-envios-medicina-Moderna-lampara-Sputnik-techo-8-luces-1-600x600.jpg",
        descripcion: "Una lamapra de techo tipo sputnik/araña moderna de brazos cruzados",
        caracteristicas: ["8 luces", "negro ambiental", "Cuerpo disipador"]
    },
    {
        id: 43, nombre: "Mouse Inalámbrico Ergonómico", categoria: "accesorios", precio: 450,
        imagen: "https://kcsolutions.com.do/wp-content/uploads/2025/12/Anker-Mouse-Ergonomico-Vertical-Inalambrico-A7852-Recargable.jpg",
        descripcion: "Ratón óptico inalámbrico silencioso de diseño cómodo.",
        caracteristicas: ["Conexión 2.4GHz y Bluetooth", "DPI ajustable", "Clics silenciosos"]
    },
    {
        id: 114, nombre: "Llaveros brainrot", categoria: "accesorios", precio: 100,
        imagen: "https://m.media-amazon.com/images/I/71CTkA7rjoL._AC_SL1500_.jpg",
        descripcion: "Con los llaveros Evadollina Brainrot, añades un toque de humor a tu día a día.",
        caracteristicas: ["Llamativo y divertido", "Versátiles", "Resistentes y ligeros"]
    },
     {
        id: 115, nombre: "LBatidora de Pedestal", categoria: "accesorios", precio: 100,
        imagen: "https://m.media-amazon.com/images/I/61qfEw5vTIL._AC_SX679_.jpg",
        descripcion: "Esta batidora de pedestal pesa menos de 3 kg y mide 33 x 18 x 26 cm. Su tamaño pequeño facilita el almacenamiento y ahorra espacio, ideal para cocinas pequeñas, departamentos o espacios reducidos.",
        caracteristicas: ["Llamativo y divertidoCapacidad de 3 L y cabezal abatible", "6 velocidades y 4 ventosas antideslizantes", "Accesorios mejorados y fácil limpieza"]
    },
    {
        id:117, nombre: "Hotsales Ventilador de escritorio recargable 360", categoria: "abanicos", precio:1800,
        imagen: "https://m.media-amazon.com/images/I/61vPxLWoCZL._AC_SL1500_.jpg",
        descripcion: "Ventilador de doble cabezal 360 para una refrigeración más amplia: Dos cabezales de ventilador controlados de forma independiente ayudan a enfriar una dirección o dos espacios a la vez.",
        caracteristicas: ["Ventilador de mesa USB de doble cabezal", "batería de 6000 mAh", "6 velocidades", "pantalla digital", "oscilación de 120°"]

    },

    // --- AURICULARES ---
    {
        id: 105, nombre: "AirPods Pro 2da Gen", categoria: "auriculares", precio: 800,
        imagen: "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.slideshow-large_2x.jpg",
        descripcion: "Auriculares in-ear con Cancelación Activa de Ruido y Audio Espacial.",
        caracteristicas: ["Cancelación de ruido pro", "Modo Ambiente adaptativo", "Estuche de carga MagSafe USB-C"]
    },
    {
        id: 106, nombre: "Auriculares Radio FM", categoria: "auriculares", precio: 19800,
        imagen: "https://i.ebayimg.com/images/g/1JYAAeSwvwppzpH3/s-l1200.webp",
        descripcion: "Audífonos de diadema inalámbricos líderes en cancelación de ruido.",
        caracteristicas: ["Hasta 30 horas de batería", "Llamadas ultraclaras", "Control táctil inteligente"]
    },
    {
        id: 107, nombre: "JBL Tune 510BT", categoria: "auriculares", precio: 2800,
        imagen: "https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_UF894,1000_QL80_.jpg",
        descripcion: "Auriculares supraaurales inalámbricos con potente sonido Pure Bass.",
        caracteristicas: ["Sonido JBL Pure Bass", "Conexión multipunto", "Carga rápida (5 min = 2h)"]
    },
    {
        id: 108, nombre: "Samsung Galaxy Buds FE", categoria: "auriculares", precio: 4900,
        imagen: "https://casacuesta.com/media/catalog/product/cache/fde49a4ea9a339628caa0bc56aea00ff/3/3/3342682-1__1706273738.jpg",
        descripcion: "Audífonos ergonómicos inalámbricos con graves profundos e integración Galaxy.",
        caracteristicas: ["Cancelación activa de ruido", "Ajuste cómodo Wingtip", "Batería de hasta 30 horas"]
    },
    {
        id: 109, nombre: "Audífonos Gamer HyperX Cloud II", categoria: "auriculares", precio: 5200,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6lYIhB_udXFhJB7mwhxY8-_cuitB_DxUs9uXCD5Afbg&s=10",
        descripcion: "Headset gamer profesional con sonido envolvente 7.1 y micrófono desmontable.",
        caracteristicas: ["Sonido Surround 7.1", "Almohadillas de espuma viscoelástica", "Estructura de aluminio resistente"]
    },
    {
        id: 110, nombre: "auricular inalambrico individual", categoria: "auriculares", precio: 850,
        imagen: "https://s.alicdn.com/@sc04/kf/H1121d0635a2d4b2495f9b59e1a01c7a4c/S10-Earhook-Wireless-Headphone-In-ear-Earbuds-Sport-Single-Earphone-Cheap-Promotional-Small-Bulk-Items-From-China-to-Sell-Resell.jpg",
        descripcion: "Audífonos de diadema de alta fidelidad con cancelación activa de ruido y audio espacial.",
        caracteristicas: ["Diseño simplista", "ajuste efectivo", "cable incluido"]
    },
    {
        id: 111, nombre: "Auriculares Genericos", categoria: "auriculares", precio: 150,
        imagen: "https://www.pcservice.com.uy/contentimg/82059/1/d/auriC.jpg",
        descripcion: "diseño facil de acomodar, micrófono con cancelación de ruido y sonido 7.1.",
        caracteristicas: ["diseño facil de acomodar", "Micrófono omnidireccional", "Conexión de audio reforzada"]
    },
    {
        id: 112, nombre: "auriculares con cable de tipo semi in ear", categoria: "auriculares", precio: 200,
        imagen: "https://m.media-amazon.com/images/I/61AnD6Qpp7L.jpg",
        descripcion: "Audífonos semi in-ear gamer inalámbricos de baja latencia con estuche.",
        caracteristicas: ["Microfono incorporado", "ergonomico de boton", "USB tipo C"]
    },
    {
        id: 113, nombre: "Beats Studio Pro", categoria: "auriculares", precio: 800,
        imagen: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/pdp/product-carousel/black/alt/black-01-studiopro.jpg",
        descripcion: "Audífonos inalámbricos de diadema con cancelación de ruido y compatibilidad Apple/Android.",
        caracteristicas: ["Audio de alta fidelidad USB-C", "Hasta 40 horas de batería", "Cancelación de ruido adaptativa"]
    },

    // --- PROTECTORES ---
    {
        id: 15, nombre: "Protector de Vidrio Templado", categoria: "protectores", precio: 300,
        imagen: "https://images-na.ssl-images-amazon.com/images/I/71aAw1Viq5L._AC_UL900_SR900,600_.jpg",
        descripcion: "Vidrio templado de alta resistencia contra impactos y rayones.",
        caracteristicas: ["Alta transparencia", "Dureza 9H", "Fácil instalación sin burbujas"]
    },
    {
        id: 44, nombre: "Vidrio Templado Privacidad", categoria: "protectores", precio: 400,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikp7ix6xTllwXET3zoHScvfqhu_j0UwbYPQt3hmAaOW-dcSEcdhVrTqk&s=10",
        descripcion: "Protector de pantalla que evita que curiosos vean tu contenido de lado.",
        caracteristicas: ["Filtro anti-espía", "Antihuellas", "Alta sensibilidad táctil"]
    },
    {
        id: 45, nombre: "Protector de Lente de Cámara", categoria: "protectores", precio: 250,
        imagen: "https://acdn-us.mitiendanube.com/stores/001/389/226/products/feed-cbf5c4bbdc1ba472fb17245100806661-1024-1024.webp",
        descripcion: "Anillo de cristal templado individual para proteger los lentes traseros.",
        caracteristicas: ["Ajuste perfecto", "No afecta la calidad de las fotos", "Anti-rayones"]
    },
    {
        id: 46, nombre: "Hidrogel Flexible HD", categoria: "protectores", precio: 350,
        imagen: "https://images.tcdn.com.br/img/img_prod/1056253/pelcula_de_hidrogel_hd_para_celular_para_mquina_de_1_20251002165732_89dda4d45fb0.jpg",
        descripcion: "Lámina de hidrogel autorreparable para pantallas curvas.",
        caracteristicas: ["Autoreparación de rayones leves", "Cobertura total", "Tacto suave"]
    },
    {
        id: 47, nombre: "Protector de Pantalla Mate", categoria: "protectores", precio: 320,
        imagen: "https://altagamadigital.com/wp-content/uploads/2023/10/ngni3852.jpg",
        descripcion: "Mica antirreflejo ideal para jugar y evitar marcas de huellas.",
        caracteristicas: ["Superficie anti-huellas", "Antirreflejos", "Textura suave al deslizar"]
    },

    // --- CÁMARAS ---
    {
        id: 16, nombre: "Cámara Réflex Digital", categoria: "camaras", precio: 18500,
        imagen: "https://m.media-amazon.com/images/I/81AtBetjmAL._AC_UY327_FMwebp_QL65_.jpg",
        descripcion: "Cámara profesional para fotografía de alta calidad y grabación de video.",
        caracteristicas: ["Sensor de alta resolución", "Lentes intercambiables", "Conectividad Wi-Fi"]
    },
    {
        id: 48, nombre: "Camara de seguridad Steren", categoria: "camaras", precio: 4500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzU6hSmEtx2O6x4mXFbg4fKARQFEWa0mSOCIB01ZtO_Qi-tIKrFBKTzO75&s=10",
        descripcion: "Cámara compacta.",
        caracteristicas: ["Resolución 4K", "Estabilizador de imagen", "conexion wifi"]
    },
    {
        id: 49, nombre: "Cámara de Seguridad WiFi", categoria: "camaras", precio: 1600,
        imagen: "https://portatilshoprd.com/wp-content/uploads/2018/12/camara-icsee.png",
        descripcion: "Cámara de vigilancia inteligente con visión nocturna y movimiento 360.",
        caracteristicas: ["Visión nocturna infrarroja", "Audio bidireccional", "Detección de movimiento"]
    },
    {
        id: 50, nombre: "Cámara Instantánea Mini", categoria: "camaras", precio: 3800,
        imagen: "https://m.media-amazon.com/images/I/61mE1U6edSL._AC_SX522_.jpg",
        descripcion: "Imprime tus fotos al instante con un diseño retro y divertido.",
        caracteristicas: ["Exposición automática", "Espejo para selfies", "Diseño compacto"]
    },
    {
        id: 51, nombre: "Cámara Mirrorless Avanzada", categoria: "camaras", precio: 28000,
        imagen: "https://cdn.hooli.com.do/wp-content/uploads/2024/02/11161852/1653354011_IMG_1760255.jpg",
        descripcion: "Cámara sin espejo de alto rendimiento para creadores de contenido pro.",
        caracteristicas: ["Enfoque automático avanzado", "Video 6K", "Cuerpo ligero de magnesio"]
    },

    // --- TABLETS ---
    {
        id: 17, nombre: "Tablet Lenovo Tab", categoria: "tablets", precio: 6800,
        imagen: "https://m.media-amazon.com/images/I/714VRmqcVmL._AC_UY327_FMwebp_QL65_.jpg",
        descripcion: "Tablet versátil para entretenimiento, clases virtuales y lectura.",
        caracteristicas: ["Pantalla HD", "Batería de larga duración", "Sonido envolvente"],
        ram: "4 GB", almacenamiento: "64 GB", pantalla: "IPS 10.1 pulgadas", bateria: "5100 mAh"
    },
    {
        id: 52, nombre: "iPad Air", categoria: "tablets", precio: 21000,
        imagen: "https://pcoutlet.com.do/wp-content/uploads/2021/07/IPAD-ARI-4TH-GEN-CATALOG.png",
        descripcion: "Potencia increíble en un diseño delgado y ligero con chip M1.",
        caracteristicas: ["Pantalla Liquid Retina", "Compatible con Apple Pencil", "Touch ID integrado"],
        ram: "8 GB", almacenamiento: "128 GB", pantalla: "Liquid Retina 10.9 pulgadas", bateria: "Hasta 10 horas"
    },
    {
        id: 53, nombre: "Tablet revvl tab 2", categoria: "tablets", precio: 17500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4AxJrbdDFDji9Uy-Uh_nVHNptpn3BOCsgwF1m1l5cA&s=10",
        descripcion: "Tablet Android de gama alta con S-Pen incluido.",
        caracteristicas: ["Pantalla Super AMOLED", "Incluye lápiz óptico", "Cuatro altavoces AKG"],
        ram: "8 GB", almacenamiento: "128 GB", pantalla: "Super AMOLED 12.4 pulgadas", bateria: "10090 mAh"
    },
    {
        id: 54, nombre: "Tablet Amazon Fire HD", categoria: "tablets", precio: 4500,
        imagen: "https://portatilshoprd.com/wp-content/uploads/2025/09/717z5zjuBWL._AC_SL1500_.jpg",
        descripcion: "Ideal para streaming, lectura y aplicaciones multimedia básicas.",
        caracteristicas: ["Pantalla HD brillante", "Procesador rápido de cuatro núcleos", "Alexa integrada"],
        ram: "3 GB", almacenamiento: "32 GB", pantalla: "HD 10.1 pulgadas", bateria: "12 horas"
    },
    {
        id: 55, nombre: "Xiaomi Pad Pro", categoria: "tablets", precio: 12500,
        imagen: "https://i02.appmifile.com/30_operatorx_operatorx_opx/24/06/2024/965dad479bbe458c5119d225cea6ba5e.png?thumb=1&w=400&q=85",
        descripcion: "Tablet potente con tasa de alta frecuencia para juegos y trabajo fluido.",
        caracteristicas: ["Pantalla 144Hz", "Carga rápida de 67W", "Cuerpo metálico delgado"],
        ram: "8 GB", almacenamiento: "256 GB", pantalla: "IPS 11 pulgadas 144Hz", bateria: "8840 mAh"
    },

    // --- COVERS ---
    {
        id: 18, nombre: "Cover Anti-Golpes", categoria: "covers", precio: 350,
        imagen: "https://m.media-amazon.com/images/I/71Q+Pfv22hL._AC_UL480_FMwebp_QL65_.jpg",
        descripcion: "Funda protectora de uso rudo con esquinas reforzadas.",
        caracteristicas: ["Protección contra caídas", "Material TPU flexible", "Diseño ergonómico"]
    },
    {
        id: 56, nombre: "Fundas de Silicona Suave", categoria: "covers", precio: 250,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_9gibfyderYvA7AYYvn-dT6DmUeiGh2E23SoMQynhnvSOiSpJIZTUrFK&s=10",
        descripcion: "Cover de tacto suave con forro interior de microfibra.",
        caracteristicas: ["Tacto sedoso", "Interior de microfibra protectora", "Variedad de colores"]
    },
    {
        id: 57, nombre: "Cover Transparente Anti-Amarillamiento", categoria: "covers", precio: 300,
        imagen: "https://m.media-amazon.com/images/I/71yOu1XR8UL._AC_UF1000,1000_QL80_.jpg",
        descripcion: "Funda cristalina que presume el diseño original de tu celular.",
        caracteristicas: ["Material resistente a los rayos UV", "Bordes realzados", "Ultra delgado"]
    },
    {
        id: 58, nombre: "Funda Tipo Libro con Tarjetero", categoria: "covers", precio: 450,
        imagen: "https://m.media-amazon.com/images/I/71irAW2-qmL._AC_UF1000,1000_QL80_.jpg",
        descripcion: "Estuche de cuero sintético con espacio para tarjetas y soporte horizontal.",
        caracteristicas: ["Cierre magnético", "Ranuras para tarjetas", "Función atril para videos"]
    },
    {
        id: 59, nombre: "Cover Magnetico MagSafe", categoria: "covers", precio: 600,
        imagen: "https://image.made-in-china.com/202f0j00iOKqWEGlZkgj/Magsafe-Magnetic-Holder-Is-Suitable-for-iPhone-17-with-Camera-Protector-Mobile-Phone-Cover.webp",
        descripcion: "Funda con anillo magnético integrado para carga inalámbrica rápida.",
        caracteristicas: ["Anillo magnético fuerte", "Protección de cámara reforzada", "Cristal posterior transparente"]
    },

    // --- CARGADORES ---
    {
        id: 19, nombre: "Cargador de Pared Rápido 20W", categoria: "cargadores", precio: 450,
        imagen: "https://upload.cdn.baselinker.com/products/3012437/93035a798fe461bd619de5490fab928f.jpg",
        descripcion: "Adaptador de corriente de carga rápida para dispositivos móviles.",
        caracteristicas: ["Puerto USB-C", "Protección contra sobrecalentamiento", "Diseño compacto"]
    },
    {
        id: 60, nombre: "Cargador Rápido Doble 65W GaN", categoria: "cargadores", precio: 1200,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_896625-MLA91042768773_082025-O.webp",
        descripcion: "Cargador de alta potencia con tecnología GaN para laptops y celulares.",
        caracteristicas: ["Doble puerto USB-C", "Tecnología GaN compacta", "Carga simultánea inteligente"]
    },
    {
        id: 61, nombre: "Cargador Inalámbrico Magnético", categoria: "cargadores", precio: 850,
        imagen: "https://walmartni.vtexassets.com/arquivos/ids/773038/M-2_walmartni_kkoRKFEqTL_239878_01.jpg?v=639190653161230000",
        descripcion: "Base de carga inalámbrica rápida con alineación magnética.",
        caracteristicas: ["Carga de 15W", "Diseño delgado y portátil", "Protección contra cortocircuitos"]
    },
    {
        id: 62, nombre: "Cargador de Carro Doble USB", categoria: "cargadores", precio: 350,
        imagen: "https://www.steren.com.do/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/1715170d1/cargador-usb-express-doble-para-auto.jpg",
        descripcion: "Adaptador para encendedor de vehículo con puertos de carga rápida.",
        caracteristicas: ["Salida QC 3.0", "Cuerpo metálico resistente", "Luz LED indicadora"]
    },
    {
        id: 63, nombre: "Estación de Carga 2 en 1", categoria: "cargadores", precio: 1500,
        imagen: "https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/2467003/attachments/large/Zens_Stand_Dock_ZEDC06W_1.jpg?1720490394",
        descripcion: "Soporte para cargar teléfono, reloj inteligente y audífonos al mismo tiempo.",
        caracteristicas: ["Diseño plegable", "Carga inalámbrica simultánea", "Organizador de escritorio"]
    },
    {
        id: 117, nombre: "Estación de Carga 3 en 1", categoria: "cargadores", precio: 1500,
        imagen: "https://m.media-amazon.com/images/I/61QVX3GteVL.jpg",
        descripcion: "Soporte para cargar teléfono, reloj inteligente y audífonos al mismo tiempo.",
        caracteristicas: ["Organiza y carga tres dispositivos a la vez.", "Almohadilla de carga inalámbrica de carga rápida.", "Alimentado por cable tipo C, incluido.","Cargos tanto en posición vertical como horizontal."]
    },

    // --- CABLES ---
    {
        id: 20, nombre: "Cable USB-C a Tipo-C Mallado", categoria: "cables", precio: 200,
        imagen: "https://acdn-us.mitiendanube.com/stores/004/965/083/products/img_5077-8f8c166c3a08fa3dfd17447497731263-1024-1024.webp",
        descripcion: "Cable de alta durabilidad para carga rápida y transferencia de datos.",
        caracteristicas: ["Longitud de 1 metro", "Recubrimiento trenzado de alta resistencia", "Soporta carga rápida"]
    },
    {
        id: 64, nombre: "Cable USB-C a Lightning 1M", categoria: "cables", precio: 280,
        imagen: "https://portatilshoprd.com/wp-content/uploads/2020/04/gsc_113466905_656975_1.jpg",
        descripcion: "Cable certificado para transferencia de datos y carga rápida en dispositivos Apple.",
        caracteristicas: ["Certificación de compatibilidad", "Refuerzo en conectores", "Trenzado de nylon"]
    },
    {
        id: 65, nombre: "Cable 3 en 1 Retráctil", categoria: "cables", precio: 300,
        imagen: "https://m.media-amazon.com/images/I/610AH95FN8L._AC_UF894,1000_QL80_.jpg",
        descripcion: "Cable multiusos con conectores Micro-USB, Tipo-C y Lightning.",
        caracteristicas: ["Sistema retráctil anti-enredos", "Diseño compacto para viajes", "Carga simultánea"]
    },
    {
        id: 66, nombre: "Cable HDMI 2.1 4K/8K de 2M", categoria: "cables", precio: 450,
        imagen: "https://www.toptecnouy.com/imgs/productos/productos34_26665.jpg",
        descripcion: "Cable de alta velocidad para transmisión de video en ultra alta definición.",
        caracteristicas: ["Soporta 4K a 120Hz", "Conectores chapados en oro", "Blindaje contra interferencias"]
    },
    {
        id: 67, nombre: "Cable Auxiliar de Audio 3.5mm", categoria: "cables", precio: 150,
        imagen: "https://www.globatecrd.com/wp-content/uploads/2020/05/Cable-de-Sonido-de-3.5MM.jpg",
        descripcion: "Cable de sonido estéreo con conectores metálicos de alta fidelidad.",
        caracteristicas: ["Conector de 3.5mm macho a macho", "Longitud de 1.5 metros", "Sonido sin pérdida"]
    },

    // --- TECLADOS ---
    {
        id: 21, nombre: "Teclado Mecánico RGB", categoria: "teclados", precio: 1500,
        imagen: "https://puntolaptop.com/web/image/product.image/18157/image_1024",
        descripcion: "Teclado mecánico para gaming y escritura con retroiluminación.",
        caracteristicas: ["Switches mecánicos", "Iluminación RGB personalizable", "Anti-ghosting"]
    },
    {
        id: 68, nombre: "Teclado Inalámbrico Slim", categoria: "teclados", precio: 950,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbJBRedQlXi9orP2sNHQ43pb5qLoZSU_wjznnvKT8uR-A2-b7ESG_NUXQ&s=10",
        descripcion: "Teclado compacto de perfil bajo para oficina y Smart TV.",
        caracteristicas: ["Conexión Bluetooth y USB 2.4G", "Diseño ultra delgado", "Teclas silenciosas tipo tijera"]
    },
    {
        id: 69, nombre: "Teclado Gamer Semi-Mecánico", categoria: "teclados", precio: 1100,
        imagen: "https://www.steren.com.do/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/21939525b/teclado-usb-semi-mecanico-gamer.jpg",
        descripcion: "Teclado con retroiluminación LED y estructura metálica resistente.",
        caracteristicas: ["Efectos de luz LED", "Resistente a salpicaduras", "Teclas multimedia dedicadas"]
    },
    {
        id: 70, nombre: "Teclado y Mouse Inalámbricos Combo", categoria: "teclados", precio: 1250,
        imagen: "https://cdn.asi.do/6twmlz54f2dhmon8ls6iauoqkdf4",
        descripcion: "Kit de oficina con receptor USB unificado de larga duración.",
        caracteristicas: ["Ahorro inteligente de energía", "Diseño ergonómico", "Fácil instalación Plug and Play"]
    },
    {
        id: 71, nombre: "Teclado Mecánico 60% Compacto", categoria: "teclados", precio: 1400,
        imagen: "https://m.media-amazon.com/images/I/61LcZpKWW-L.jpg",
        descripcion: "Teclado minimalista ideal para optimizar espacio en el escritorio.",
        caracteristicas: ["Formato 60% sin teclado numérico", "Cable USB-C desmontable", "Switches intercambiables"]
    },

    // --- BOCINAS ---
    {
        id: 22, nombre: "Bocina Portátil JBL Clip", categoria: "bocinas", precio: 1200,
        imagen: "https://sis.omega.com.do/ProductImages/8755ed20-54f8-46d5-973d-202b5d3dfe97.png",
        descripcion: "Bocina inalámbrica resistente al agua con gancho integrado.",
        caracteristicas: ["Bluetooth", "Resistencia al agua IPX7", "Batería de hasta 10 horas"]
    },
    {
        id: 72, nombre: "Bocina Bluetooth RGB Bass", categoria: "bocinas", precio: 1800,
        imagen: "https://image.made-in-china.com/202f0j00MTQboWzyaegu/Portable-High-Quality-Loud-Super-Bass-RGB-Smart-Speaker-Bluetooth-Speaker.webp",
        descripcion: "Altavoz inalámbrico con luces rítmicas y refuerzo de graves.",
        caracteristicas: ["Sonido estéreo 360°", "Luces LED dinámicas", "Ranura para tarjeta MicroSD"]
    },
    {
        id: 73, nombre: "Hydra mini 2.0", categoria: "bocinas", precio: 1600,
        imagen: "https://i5.walmartimages.com/seo/Altec-Lansing-HydraMini-2-0-EverythingProof-Bluetooth-Speaker-Waterproof-IP67-Floats-12-Hour-Playtime-Built-In-Magnet-Carabiner-Mount-Blue-White_3891cbf2-37eb-4197-893f-a31269b600c0.43c9096bcba7dd53fa570826b216acfb.jpeg",
        descripcion: "Barra de sonido compacta con alimentación USB para escritorios.",
        caracteristicas: ["Control de volumen frontal", "Entrada auxiliar y Bluetooth", "Diseño estilizado"]
    },
    {
        id: 74, nombre: "Bocina Logitech Z130", categoria: "bocinas", precio: 3200,
        imagen: "https://www.globatecrd.com/wp-content/uploads/2020/04/bocino-logitech-z130.jpg",
        descripcion: "Sistema de sonido portátil con micrófono inalámbrico incluido.",
        caracteristicas: ["Modo cambio de voz", "Batería recargable de alta capacidad", "Conexión Bluetooth 5.0"]
    },
    {
        id: 75, nombre: "Mini Bocina Inalámbrica TWS", categoria: "bocinas", precio: 650,
        imagen: "https://www.steren.com.do/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/21459dcb5/bocina-bluetooth-mini-boombox-tws.jpg",
        descripcion: "Pequeña bocina de bolsillo con sonido claro y manos libres.",
        caracteristicas: ["Ultra portátil", "Función TWS para emparejar dos bocinas", "Micrófono integrado"]
    },

    // --- IMPRESORAS ---
    {
        id: 23, nombre: "Impresora Multifuncional Epson", categoria: "impresoras", precio: 7500,
        imagen: "https://m.media-amazon.com/images/I/71W17ZX8yuL._AC_UY327_FMwebp_QL65_.jpg",
        descripcion: "Impresora de tanque de tinta para hogar y oficina.",
        caracteristicas: ["Impresión, copia y escaneo", "Sistema de tanque continuo", "Conexión USB y Wi-Fi"]
    },
    {
        id: 76, nombre: "Impresora HP LaserJet Monocromática", categoria: "impresoras", precio: 6800,
        imagen: "https://m.media-amazon.com/images/I/61kFtnYtECL._AC_UF894,1000_QL80_.jpg",
        descripcion: "Impresora láser rápida y eficiente para documentos de texto.",
        caracteristicas: ["Alta velocidad de impresión", "Tecnología láser de tóner", "Conectividad inalámbrica"]
    },
    {
        id: 77, nombre: "Impresora Térmica de Recibos", categoria: "impresoras", precio: 3400,
        imagen: "https://m.media-amazon.com/images/I/61DmDR8s7yL.jpg",
        descripcion: "Impresora de tickets POS ideal para pequeños comercios y facturación.",
        caracteristicas: ["Impresión térmica sin tinta", "Corte automático de papel", "Conexión USB y Bluetooth"]
    },
    {
        id: 78, nombre: "Mini Impresora Fotográfica Portátil", categoria: "impresoras", precio: 4200,
        imagen: "https://m.media-amazon.com/images/I/515ygkd27JL._AC_UF894,1000_QL80_.jpg",
        descripcion: "Imprime fotos directamente desde tu celular sin necesidad de tinta.",
        caracteristicas: ["Tecnología ZINK sin tinta", "Tamaño de bolsillo", "Pegatinas fotográficas adhesivas"]
    },
    {
        id: 79, nombre: "Impresora Canon Pixma Inalámbrica", categoria: "impresoras", precio: 4900,
        imagen: "https://m.media-amazon.com/images/I/71lSQ3vl3mL.jpg",
        descripcion: "Impresora a color para fotos y documentos con diseño compacto.",
        caracteristicas: ["Impresión fotográfica sin bordes", "Configuración sencilla por app", "Escáner integrado"]
    },

    // --- PROYECTORES ---
    {
        id: 24, nombre: "Proyector LED Portátil HD", categoria: "proyectores", precio: 4900,
        imagen: "https://m.media-amazon.com/images/I/61mwHaSG8aL._AC_UY327_FMwebp_QL65_.jpg",
        descripcion: "Proyector multimedia para cine en casa y presentaciones.",
        caracteristicas: ["Resolución HD", "Entradas HDMI y USB", "Altavoz integrado"]
    },
    {
        id: 80, nombre: "Proyector Smart Android 1080P", categoria: "proyectores", precio: 9500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1txaSU18xHQF-_aLpiPEj9G0WWfyssBGcSSP40gw8bw&s=10",
        descripcion: "Proyector inteligente con sistema operativo y apps de streaming.",
        caracteristicas: ["Resolución nativa Full HD", "Android TV integrado", "Corrección trapezoidal automática"]
    },
    {
        id: 81, nombre: "Mini Proyector de Bolsillo", categoria: "proyectores", precio: 3200,
        imagen: "https://i0.wp.com/cdn.dtmg.xyz/uploads/sites/13/2020/02/nebulacapsulefinal.jpg?resize=768%2C512&ssl=1",
        descripcion: "Proyector ultra compacto alimentado por puerto USB o batería externa.",
        caracteristicas: ["Diseño ultra portátil", "Reproducción multimedia vía USB", "Ideal para habitaciones"]
    },
    {
        id: 82, nombre: "Proyector 4K Home Cinema", categoria: "proyectores", precio: 22000,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOuTL-a78LX7oWDjx3V8UKNz7u18JY7lhqDHZbXgtsQ&s=10",
        descripcion: "Proyector de alta gama con brillo superior y soporte 4K.",
        caracteristicas: ["Luminosidad alta para ambientes iluminados", "Enfoque motorizado", "Sonido Dolby Digital"]
    },
    {
        id: 83, nombre: "Pantalla de Proyección Trípode", categoria: "proyectores", precio: 2800,
        imagen: "https://tecnoedu.com/Audiovisuales/img/T84.jpg",
        descripcion: "Superficie blanca mate retráctil con soporte de trípode ajustable.",
        caracteristicas: ["Formato 16:9", "Tela antirreflejos", "Fácil montaje y transporte"]
    },

    // --- TV ---
    {
        id: 25, nombre: "Smart TV 32\" LED", categoria: "tv", precio: 11500,
        imagen: "https://www.tiendascorripio.com.do/media/catalog/product/t/v/tva-aw32b4smg_001_2_1_fbuzbm6yw6beslfc.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
        descripcion: "Televisor inteligente con aplicaciones de streaming integradas.",
        caracteristicas: ["Resolución HD", "Sistema Smart TV", "Puertos HDMI y USB"]
    },
    {
        id: 84, nombre: "Smart TV 43\" 4K UHD", categoria: "tv", precio: 17800,
        imagen: "https://www.tiendascorripio.com.do/media/catalog/product/t/v/tva-aw43b4sfg_001_1_hj0je3vbgw805hjf.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
        descripcion: "Televisor con calidad de imagen ultradefinida y HDR.",
        caracteristicas: ["Resolución 4K Ultra HD", "Control por voz", "Diseño sin marcos"]
    },
    {
        id: 85, nombre: "Smart TV 50\" QLED", categoria: "tv", precio: 24500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQK156iaPXoFwe1Z6oAKeoQbJofgShi9MLouzgz535Fg&s=10",
        descripcion: "Pantalla con tecnología de puntos cuánticos para colores más vivos.",
        caracteristicas: ["Tecnología QLED", "Modo juego de baja latencia", "Sonido envolvente virtual"]
    },
    {
        id: 86, nombre: "Smart TV 24\" HD para Cocina", categoria: "tv", precio: 8500,
        imagen: "https://www.cdiscount.com/pdt2/1/1/6/1/700x700/san1712402937116/rw/televiseur-24-pouces-led-tv-full-hd-60-cm-avec.jpg",
        descripcion: "Televisor pequeño y versátil ideal para espacios reducidos.",
        caracteristicas: ["Tamaño compacto", "Sintonizador digital integrado", "Reproductor multimedia USB"]
    },
    {
        id: 87, nombre: "Smart TV 55\" Frameless", categoria: "tv", precio: 29000,
        imagen: "https://visionplus.co.ke/wp-content/uploads/2026/03/VP8855KA-NEW-Side_6.jpg",
        descripcion: "Televisor de gran formato con diseño elegante sin bordes.",
        caracteristicas: ["Pantalla 4K HDR10+", "Múltiples puertos HDMI", "Conectividad Wi-Fi de doble banda"]
    },

    // --- SELFIE ---
    {
        id: 26, nombre: "Palo de Selfie Bluetooth con Trípode", categoria: "selfie", precio: 550,
        imagen: "https://m.media-amazon.com/images/I/61TopvAsziL._AC_UY327_FMwebp_QL65_.jpg",
        descripcion: "Bastón extensible con control remoto inalámbrico y función de trípode.",
        caracteristicas: ["Control Bluetooth desmontable", "Rotación de 360 grados", "Diseño ligero y plegable"]
    },
    {
        id: 88, nombre: "Aro de Luz LED con Trípode para Celular", categoria: "selfie", precio: 950,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScX2_acVb_rUUJ4XqSNVaiQWJM7BSl951VPMf2mdjl4w&s=10",
        descripcion: "Luz de anillo ajustable con soporte para smartphone para transmisiones y fotos.",
        caracteristicas: ["3 modos de temperatura de color", "Brillo regulable", "Trípode extensible incluido"]
    },
    {
        id: 89, nombre: "Estabilizador Gimbal de Mano", categoria: "selfie", precio: 3900,
        imagen: "https://static.bidcom.com.ar/publicacionesML/productos/GIM00010/1000x1000-GIM00010-A.jpg",
        descripcion: "Gimbal motorizado de 3 ejes para videos de celular totalmente estables.",
        caracteristicas: ["Seguimiento facial inteligente", "Batería de larga duración", "Modo panorámico automático"]
    },
    {
        id: 90, nombre: "Mini Aro de Luz Clip para Celular", categoria: "selfie", precio: 250,
        imagen: "https://m.media-amazon.com/images/I/61H5pFJHZNL.jpg",
        descripcion: "Luz LED portátil recargable que se ajusta a cualquier teléfono.",
        caracteristicas: ["Recargable por USB", "Intensidad ajustable", "Diseño de bolsillo"]
    },
    {
        id: 91, nombre: "Trípode Flexible para Smartphone", categoria: "selfie", precio: 380,
        imagen: "https://m.media-amazon.com/images/I/71JuFIvaN2L._AC_.jpg",
        descripcion: "Trípode con patas flexibles recubiertas de goma para sujetarse de cualquier superficie.",
        caracteristicas: ["Patas flexibles y adaptables", "Cabezal giratorio de bola", "Compatible con cámaras y celulares"]
    },

    // --- ABANICOS ---
    {
        id: 27, nombre: "Abanico de Pedestal Oscilante", categoria: "abanicos", precio: 2200,
        imagen: "https://m.media-amazon.com/images/I/71cJDHj33XL._AC_SX679_.jpg",
        descripcion: "Abanico de 3 velocidades con altura ajustable y oscilación.",
        caracteristicas: ["Motor silencioso", "Aspas aerodinámicas", "Altura regulable"]
    },
    {
        id: 92, nombre: "Mini Abanico de Mesa USB", categoria: "abanicos", precio: 1600,
        imagen: "https://cdn.asi.do/jf1h4nykpohthkveojbvm7dtqjlh",
        descripcion: "Ventilador personal compacto alimentado por USB para oficina o estudio.",
        caracteristicas: ["Funcionamiento silencioso", "Ángulo ajustable de 360 grados", "Bajo consumo energético"]
    },
    {
        id: 93, nombre: "Abanico de Pared con Control Remoto", categoria: "abanicos", precio: 2800,
        imagen: "https://titan.com.pa/cdn/shop/files/abanico-de-pared-sankey-control-16-fn-1832rc-sankey-11157037-6118164.jpg?v=1789577106",
        descripcion: "Ventilador montable en pared con múltiples velocidades y control remoto.",
        caracteristicas: ["Control remoto inalámbrico", "Oscilación amplia", "Temporizador programable"]
    },
    {
        id: 94, nombre: "Abanico Portátil Recargable", categoria: "abanicos", precio: 1500,
        imagen: "https://media.adeo.com/mkp/a764b70a4be9015e5344bcc7704bfa44/media.jpg",
        descripcion: "Ventilador de mano con batería recargable y base de escritorio.",
        caracteristicas: ["Batería de larga duración", "Tamaño compacto", "3 niveles de velocidad"]
    },
    {
        id: 95, nombre: "Abanico de Torre Oscilante Digital", categoria: "abanicos", precio: 3500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW5QYZLkSEPjp5mLrMk7WrRLuLU44h43JRHp_mmKvHg&s=10https://m.media-amazon.com/images/I/61bS9bL8TbL.jpg",
        descripcion: "Ventilador de torre moderno con pantalla LED y panel táctil.",
        caracteristicas: ["Diseño elegante que ahorra espacio", "Pantalla con indicador de temperatura", "Modo brisa natural"]
    },
    {
        id: 116, nombre: "Abanico portatil fan modelo f10", categoria: "abanicos", precio: 800,
        imagen: "https://sc04.alicdn.com/kf/H6da6103b8a39411ea1d5902e78f4807ep.jpg",
        descripcion: "El ventilador de escritorio Hoco HX607 Slim es una solución de refrigeración moderna y ultraportátil diseñada para proporcionar un flujo de aire silencioso y eficiente en cualquier entorno.",
        caracteristicas: ["diseño ultradelgado y ligero", "Su doble función (sobremesa y montaje en pared)", "batería recargable integrada de 2000 mAh"]
    },
    // --- AIRES ---
    {
        id: 28, nombre: "Aire Acondicionado Inverter 12000 BTU", categoria: "aires", precio: 24000,
        imagen: "https://m.media-amazon.com/images/I/81qplIizScL._AC_UF894,1000_QL80_.jpg",
        descripcion: "Sistema de climatización de alta eficiencia energética con tecnología Inverter.",
        caracteristicas: ["Tecnología Inverter ahorradora", "Control remoto incluido", "Modo silencioso y refrigeración rápida"]
    },
    {
        id: 96, nombre: "Aire Acondicionado Portátil 10000 BTU", categoria: "aires", precio: 21500,
        imagen: "https://www.lg.com/cac/images/aire-acondicionado-residencial/md07593270/gallery/D-2.jpg",
        descripcion: "Climatizador móvil fácil de instalar sin obras en la pared.",
        caracteristicas: ["Kit de instalación para ventana incluido", "Función 3 en 1: frío, ventilador y deshumidificador", "Ruedas de desplazamiento"]
    },
    {
        id: 97, nombre: "Aire Acondicionado Inverter 18000 BTU", categoria: "aires", precio: 34000,
        imagen: "https://refripartes.com/uploads/portable%20AC.jpg",
        descripcion: "Mayor potencia de enfriamiento para salas amplias o comercios.",
        caracteristicas: ["Alta capacidad de climatización", "Filtro purificador de aire", "Bajo nivel de ruido"]
    },
    {
        id: 98, nombre: "Mini Enfriador de Aire Evaporativo", categoria: "aires", precio: 1800,
        imagen: "https://m.media-amazon.com/images/I/81lgCE+FjdS._AC_UF894,1000_QL80_.jpg",
        descripcion: "Climatizador personal de escritorio que utiliza agua para refrescar el ambiente.",
        caracteristicas: ["Depósito de agua con opción de hielo", "Luz LED ambiental", "Alimentación USB"]
    },
    {
        id: 99, nombre: "Aire Acondicionado Smart WiFi 12000 BTU", categoria: "aires", precio: 26500,
        imagen: "https://electroomega.com.do/wp-content/uploads/2025/02/Aire-Acondicionado-Smart-Inverter-Midea-12-mil-btu-18-mil-btu.jpg",
        descripcion: "Climatizador inteligente compatible con asistentes de voz y control por app móvil.",
        caracteristicas: ["Conectividad Wi-Fi", "Compatible con Alexa y Google Assistant", "Ahorro energético avanzado"]
    },

    // --- MICROONDAS ---
    {
        id: 100, nombre: "Microondas Digital 0.7 Pies", categoria: "microondas", precio: 5200,
        imagen: "https://electroomega.com.do/wp-content/uploads/2026/01/Microondas-Digital-Midea-0.7-pies-cubicos-20-litros-EM720CSMOW.jpg",
        descripcion: "Horno microondas compacto con panel digital y funciones de cocción rápida.",
        caracteristicas: ["Pantalla LED digital", "Menús preestablecidos", "Función de descongelamiento por peso"]
    },
    {
        id: 101, nombre: "Microondas con Grill 1.1 Pies", categoria: "microondas", precio: 7800,
        imagen: "https://www.tiendascorripio.com.do/media/catalog/product/h/m/hms-ms32dg4504a_001_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
        descripcion: "Microondas espacioso con resistencia grill para dorar y gratinar alimentos.",
        caracteristicas: ["Función grill integrada", "Plato giratorio de vidrio", "Bloqueo de seguridad para niños"]
    },
    {
        id: 102, nombre: "Microondas Espejo Moderno 0.9 Pies", categoria: "microondas", precio: 6400,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf0W1zRBDqaF79BLXYuXcePvyBlUc-6oEmF3D6XNxVonOBRYBizeEUI6k&s=10",
        descripcion: "Diseño elegante con acabado de puerta tipo espejo y controles intuitivos.",
        caracteristicas: ["Diseño estético con acabado espejo", "Cocción en etapas", "Botón de apertura rápida"]
    },
    {
        id: 103, nombre: "Microondas Compacto Ecoonómic", categoria: "microondas", precio: 4500,
        imagen: "https://m.media-amazon.com/images/I/61Kxq11KIgL.jpg",
        descripcion: "Horno microondas mecánico sencillo de perillas ideal para el hogar.",
        caracteristicas: ["Perillas mecánicas fáciles de usar", "Potencia ajustable", "Interior fácil de limpiar"]
    },
    {
        id: 104, nombre: "Microondas Inverter de Alta Potencia", categoria: "microondas", precio: 9500,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57N0mfAWJ5jmSNrZNt9BjNZHMPEdyvniI4cSldr_l1trut2O3pBUME6ye&s=10",
        descripcion: "Tecnología Inverter para calentar de forma uniforme sin sobrecocinar los bordes.",
        caracteristicas: ["Tecnología Inverter de calentamiento uniforme", "Diseño de acero inoxidable", "Sensor de cocción inteligente"]
    }
];

let carrito = [];
let categoriaActual = "todos";
let productoSeleccionado = null;
let productoPendienteId = null;

const $ = id => document.getElementById(id);
const productGrid = $("productGrid");
const searchInput = $("searchInput");
const catButtons = document.querySelectorAll(".cat-btn");
const cartBtn = $("cartBtn");
const cartModal = $("cartModal");
const closeCart = $("closeCart");
const cartItemsContainer = $("cartItems");
const cartTotal = $("cartTotal");
const cartCount = $("cartCount");
const detailsModal = $("detailsModal");
const closeDetails = $("closeDetails");
const detailImage = $("detailImage");
const detailName = $("detailName");
const detailCategory = $("detailCategory");
const detailDescription = $("detailDescription");
const detailPrice = $("detailPrice");
const detailFeatures = $("detailFeatures");
const detailAddBtn = $("detailAddBtn");
const sendWhatsappBtn = $("sendWhatsappBtn");
const confirmModal = $("confirmModal");
const confirmImg = $("confirmImg");
const confirmTitle = $("confirmTitle");
const btnYes = $("btnYes");
const btnNo = $("btnNo");

const dinero = cantidad => new Intl.NumberFormat("es-DO", {
    style: "currency", currency: "DOP"
}).format(cantidad);

function renderProducts() {
    if (!productGrid || !searchInput) return;
    const texto = searchInput.value.trim().toLowerCase();
    const filtrados = productos.filter(p =>
        (categoriaActual === "todos" || p.categoria === categoriaActual) &&
        (p.nombre.toLowerCase().includes(texto) ||
         p.descripcion.toLowerCase().includes(texto) ||
         p.categoria.includes(texto))
    );

    productGrid.innerHTML = "";
    if (!filtrados.length) {
        productGrid.textContent = "No se encontraron productos.";
        return;
    }

    filtrados.forEach(p => {
        const card = document.createElement("article");
        card.className = "product-card";

        const img = document.createElement("img");
        img.className = "product-image";
        img.src = p.imagen;
        img.alt = p.nombre;
        img.loading = "lazy";
        img.addEventListener("click", () => verDetalles(p.id));

        const info = document.createElement("div");
        info.className = "product-info";

        const title = document.createElement("h3");
        title.className = "product-title";
        title.textContent = p.nombre;

        const desc = document.createElement("p");
        desc.className = "product-description";
        desc.textContent = p.descripcion;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = dinero(p.precio);

        const details = document.createElement("button");
        details.className = "btn-details";
        details.textContent = "Ver detalles";
        details.addEventListener("click", () => verDetalles(p.id));

        const add = document.createElement("button");
        add.className = "btn-add";
        add.textContent = "Añadir al carrito";
        add.addEventListener("click", () => pedirConfirmacion(p.id));

        info.append(title, desc, price, details, add);
        card.append(img, info);
        productGrid.appendChild(card);
    });
}

searchInput?.addEventListener("input", renderProducts);

catButtons.forEach(btn => btn.addEventListener("click", () => {
    catButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    categoriaActual = btn.dataset.category || "todos";
    renderProducts();
}));

function verDetalles(id) {
    const p = productos.find(item => item.id === Number(id));
    if (!p || !detailsModal) return;
    productoSeleccionado = p;

    detailImage.src = p.imagen;
    detailImage.alt = p.nombre;
    detailName.textContent = p.nombre;
    detailCategory.textContent = p.categoria;
    detailDescription.textContent = p.descripcion;
    detailPrice.textContent = dinero(p.precio);
    detailFeatures.innerHTML = "";

    let totalDetalles = [];
    if (p.ram && p.almacenamiento) {
        totalDetalles = [
            `Memoria RAM: ${p.ram}`,
            `Almacenamiento: ${p.almacenamiento}`,
            `Tipo de Pantalla: ${p.pantalla}`,
            `Batería: ${p.bateria}`,
            ...p.caracteristicas
        ];
    } else {
        totalDetalles = [...p.caracteristicas];
    }

    totalDetalles.forEach(texto => {
        const li = document.createElement("li");
        li.textContent = texto;
        detailFeatures.appendChild(li);
    });

    if (detailAddBtn) {
        detailAddBtn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Comprar`;
    }

    detailsModal.classList.add("show");
}

function cerrarDetalles() {
    detailsModal?.classList.remove("show");
    productoSeleccionado = null;
}

closeDetails?.addEventListener("click", cerrarDetalles);
detailsModal?.addEventListener("click", e => {
    if (e.target === detailsModal) cerrarDetalles();
});

function pedirConfirmacion(id) {
    const p = productos.find(item => item.id === Number(id));
    if (!p || !confirmModal) return;

    productoPendienteId = Number(id);
    confirmImg.src = p.imagen;
    confirmImg.alt = p.nombre;
    confirmTitle.textContent = `¿Deseas agregar "${p.nombre}" al carrito?`;
    confirmModal.classList.add("show");
}

btnYes?.addEventListener("click", () => {
    if (productoPendienteId !== null) {
        const p = productos.find(item => item.id === productoPendienteId);
        if (p) {
            const existente = carrito.find(item => item.producto.id === p.id);
            if (existente) {
                existente.cantidad++;
            } else {
                carrito.push({ producto: p, cantidad: 1 });
            }
            actualizarCarrito();
        }
        productoPendienteId = null;
    }
    confirmModal?.classList.remove("show");
});

btnNo?.addEventListener("click", () => {
    productoPendienteId = null;
    confirmModal?.classList.remove("show");
});

detailAddBtn?.addEventListener("click", () => {
    if (!productoSeleccionado) return;
    const idParaComprar = productoSeleccionado.id;
    cerrarDetalles();
    pedirConfirmacion(idParaComprar);
});

function agregarDirecto(id) {
    const p = productos.find(item => item.id === Number(id));
    if (!p) return;
    const existente = carrito.find(item => item.producto.id === p.id);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ producto: p, cantidad: 1 });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    if (!cartItemsContainer || !cartTotal || !cartCount) return;
    cartItemsContainer.innerHTML = "";
    let total = 0, unidades = 0;

    if (!carrito.length) {
        const aviso = document.createElement("p");
        aviso.className = "empty-cart";
        aviso.textContent = "Tu carrito está vacío. ¡Añade productos!";
        cartItemsContainer.appendChild(aviso);
    }

    carrito.forEach(item => {
        const p = item.producto;
        const subtotal = p.precio * item.cantidad;
        total += subtotal;
        unidades += item.cantidad;

        const fila = document.createElement("div");
        fila.className = "cart-item";

        const img = document.createElement("img");
        img.src = p.imagen;
        img.alt = p.nombre;

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const nombre = document.createElement("h3");
        nombre.textContent = p.nombre;

        const precio = document.createElement("p");
        precio.textContent = dinero(p.precio) + " c/u";

        const controles = document.createElement("div");
        controles.className = "quantity-controls";

        const menos = document.createElement("button");
        menos.type = "button";
        menos.textContent = "−";
        menos.addEventListener("click", () => {
            item.cantidad--;
            if (item.cantidad <= 0) {
                carrito = carrito.filter(i => i.producto.id !== p.id);
            }
            actualizarCarrito();
        });

        const cantidad = document.createElement("span");
        cantidad.textContent = item.cantidad;

        const mas = document.createElement("button");
        mas.type = "button";
        mas.textContent = "+";
        mas.addEventListener("click", () => {
            agregarDirecto(p.id);
        });

        controles.append(menos, cantidad, mas);

        const eliminar = document.createElement("button");
        eliminar.type = "button";
        eliminar.className = "remove-btn";
        eliminar.textContent = "Eliminar";
        eliminar.addEventListener("click", () => {
            carrito = carrito.filter(i => i.producto.id !== p.id);
            actualizarCarrito();
        });

        info.append(nombre, precio, controles, eliminar);

        const subtotalTexto = document.createElement("div");
        subtotalTexto.className = "cart-item-subtotal";
        subtotalTexto.textContent = dinero(subtotal);

        fila.append(img, info, subtotalTexto);
        cartItemsContainer.appendChild(fila);
    });

    cartCount.textContent = unidades;
    cartTotal.textContent = dinero(total);
}

cartBtn?.addEventListener("click", () => {
    actualizarCarrito();
    cartModal?.classList.add("show");
});

closeCart?.addEventListener("click", () => cartModal?.classList.remove("show"));
cartModal?.addEventListener("click", e => {
    if (e.target === cartModal) cartModal.classList.remove("show");
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        cartModal?.classList.remove("show");
        cerrarDetalles();
        confirmModal?.classList.remove("show");
    }
});

sendWhatsappBtn?.addEventListener("click", () => {
    if (!carrito.length) {
        alert("Tu carrito está vacío. Añade algún producto primero.");
        return;
    }

    const confirmarEnvio = confirm("¿Estás seguro de que deseas enviar este pedido por WhatsApp?");
    if (!confirmarEnvio) return;

    let total = 0;
    let mensaje = "¡Hola, InverTechStore! Quiero realizar este pedido:\n\n";

    carrito.forEach(item => {
        const p = item.producto;
        const subtotal = p.precio * item.cantidad;
        total += subtotal;
        mensaje += `${p.nombre}\nCantidad: ${item.cantidad}\nPrecio unitario: ${dinero(p.precio)}\nSubtotal: ${dinero(subtotal)}\n\n`;
    });

    mensaje += `TOTAL DEL PEDIDO: ${dinero(total)}\n`;
    mensaje += "¿Podrían confirmarme la disponibilidad y la entrega?";

    const telefono = "18298931577";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
});

renderProducts();
actualizarCarrito();
