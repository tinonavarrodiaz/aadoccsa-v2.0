export interface Producto {
  name: string | null;
  image: string;
  ficha: string | null;
}

export interface LineaHogar {
  CalentadoresDeAgua: Producto[];
  Frigobar: Producto[];
  DispensadoresDeAgua: Producto[];
  CampanasParaCocina: Producto[];
  ParrillasParaCocina: Producto[];
  PurificadoresDeAgua: Producto[];
  MaquinasDeHielo: Producto[];
  MaquinasGourmetDeCafe: Producto[];
}

export interface Productos {
  Minisplit: Producto[];
  LineaHogar: LineaHogar;
  Paquetes: Producto[];
  Divididos: Producto[];
  EnergiaSolar: Producto[];
}

export const productos = {
  Minisplit: [
    { name: "Inverter X", image: "/img/productos/new/inverterx.jpg", ficha: "https://mirage.egnyte.com/dl/vDkmpxookg/Minisplit_Inverter_Inverter_X.pdf" },
    { name: "Magnum 17", image: "/productos/magnum17.html", ficha: "pdf/MAGNUM17.pdf" },
    { name: "Magnum 19", image: "/img/new/magnum19.jpg", ficha: "pdf/MAGNUM19.pdf" },
    { name: "X One", image: "/img/productos/new/xone.jpg", ficha: "https://mirage.egnyte.com/dl/9f0ETiP0nW/Minisplit_X_Max.pdf_" },
    { name: "X2", image: "/img/productos/new/x2.jpg", ficha: "/img/productos/new/x2-ft.jpg" },
    { name: "Bluplus", image: "/img/productos/new/bluplus.jpg", ficha: "assets/pdf/new/Blu-Plus.pdf" },
    { name: "RVI", image: "/img/productos/new/rvi.jpg", ficha: "assets/pdf/new/Brochure-RVI-2019.pdf" },
    { name: "CI", image: "/img/productos/new/ci.jpg", ficha: "assets/pdf/new/Ci.pdf" },
    { name: "RVI Central", image: "/img/productos/new/rvicentral.jpg", ficha: "assets/pdf/new/Fact-Sheets-RVI-Central.pdf" },
    { name: "CI Magnum", image: "/img/productos/new/cimagnum.jpg", ficha: "assets/pdf/new/CI-MAGNUM.pdf" },
    { name: "WIFI 2018", image: "/img/new/WIFI-2018.jpg", ficha: "pdf/WIFI-2018.pdf" },
    { name: "UVC Inverter", image: "/img/nuevo1/imagen_1.png", ficha: "assets/pdf/nuevos/fact_sheets_uvc.pdf" },
    { name: "VOX Inverter", image: "/img/nuevo1/imagen_3.png", ficha: "assets/pdf/nuevos/FACT_SHEETS_VOX.pdf" },
    { name: "Magnum 19 Platinium", image: "/img/nuevo1/imagen_4.png", ficha: "assets/pdf/nuevos/MAGNUM_PLATINUM_19e.pdf" },
    { name: "Inverter X", image: "/img/nuevo1/imagen_5.png", ficha: "assets/pdf/nuevos/Fact-Sheets-Inverter-X.pdf" },
    { name: "LIFE 12", image: "/img/nuevo1/imagen_6.png", ficha: "assets/pdf/nuevos/Minisplit_LIFE12.pdf" },
    { name: "X ONE", image: "/img/nuevo1/imagen_7.png", ficha: "assets/pdf/nuevos/Minisplit_X_One.pdf" },
    { name: "Q 17", image: "/img/nuevo1/imagen_8.png", ficha: "assets/pdf/nuevos/Q17.pdf" },
    { name: "X PLUS", image: "/img/nuevo1/imagen_9.png", ficha: "assets/pdf/nuevos/X-PLUS.pdf" },
    { name: "XR", image: "/img/nuevo1/imagen_10.png", ficha: "assets/pdf/nuevos/XR.pdf" },
  ],

  LineaHogar: {
    CalentadoresDeAgua: [
      { name: "Flux 16L", image: "/img/productos/small/flux16l.jpg", ficha: "/productos/images/hogar/calentadores/flux-16l/tabla-16l.jpg" },
      { name: "Flux 10L", image: "/img/productos/small/flux10l.jpg", ficha: "/productos/images/hogar/calentadores/flux-10l/tabla-10l.jpg" },
      { name: "Flux 6L", image: "/img/productos/small/flux6l.jpg", ficha: "/productos/images/hogar/calentadores/flux-6l/tabla-6l.jpg" },
    ],
    Frigobar: [
      { name: "Refx 10", image: "/img/productos/small/reflex10.jpg", ficha: "/productos/images/hogar/frigobar/reflex10/tabla-ref10.jpg" },
      { name: "Refx 20", image: "/img/productos/small/reflex20.jpg", ficha: "/productos/images/hogar/frigobar/reflex20/tabla-ref20.jpg" },
      { name: "Refx 30", image: "/img/productos/small/reflex30.jpg", ficha: "/productos/images/hogar/frigobar/reflex30/tabla-ref20.jpg" },
    ],
    DispensadoresDeAgua: [
      { name: "Disx 10", image: "/img/productos/small/disx10.jpg", ficha: "/productos/images/hogar/dispensadores/disx10/tabla-disx10.jpg" },
      { name: "Disx 20", image: "/img/productos/small/disx20.jpg", ficha: "/productos/images/hogar/dispensadores/disx20/tabla-disx20.jpg" },
      { name: "Disx 30", image: "/img/productos/small/disx30.jpg", ficha: "/productos/images/hogar/dispensadores/disx30/tabla-disx30.jpg" },
    ],
    CampanasParaCocina: [
      { name: "Velox 90L", image: "/img/productos/small/velox90l.jpg", ficha: "/productos/images/hogar/campanas/velox90l/tabla-90l.jpg" },
      { name: "Velox 90N", image: "/img/productos/small/velox90n.jpg", ficha: "/productos/images/hogar/campanas/velox90n/tabla-v90n.jpg" },
      { name: "Velox 90R", image: "/img/productos/small/velox90r.jpg", ficha: "/productos/images/hogar/campanas/velox90r/tabla-v90r.jpg" },
      { name: "Velox 60L", image: "/img/productos/small/verlox60l.jpg", ficha: "/productos/images/hogar/campanas/verlox60l/tablavelox60l.jpg" },
      { name: "Velox 60S", image: "/img/productos/small/verlox60s.jpg", ficha: "/productos/images/hogar/campanas/verlox60s/tabla-velox60s.jpg" },
      { name: "Velox 75", image: "/img/productos/small/verlox75.jpg", ficha: "/productos/images/hogar/campanas/verlox75/tabla-v75.jpg" },
    ],
    ParrillasParaCocina: [
      { name: "Sparx 90B", image: "/img/productos/small/sparx90b.jpg", ficha: "/productos/images/hogar/parrillas/sparx90b/tabla-s90b.jpg" },
      { name: "Sparx 90S", image: "/img/productos/small/sparx90s.jpg", ficha: "/productos/images/hogar/parrillas/sparx90s/tabla-s90s.jpg" },
      { name: "Sparx 80", image: "/img/productos/small/sparx80.jpg", ficha: "/productos/images/hogar/parrillas/sparx80/tabla-s80.jpg" },
      { name: "Sparx 75", image: "/img/productos/small/sparx75.jpg", ficha: "/productos/images/hogar/parrillas/sparx75/tabla-s75.jpg" },
      { name: "Sparx 60", image: "/img/productos/small/sparx60.jpg", ficha: "/productos/images/hogar/parrillas/sparx60/tabla-s60.jpg" },
    ],
    PurificadoresDeAgua: [
      { name: "Hydrox 50R", image: "/img/productos/small/hydrox50r.jpg", ficha: "/productos/images/hogar/purificadores/hydrox50r/tabla-h50r.jpg" },
      { name: "Hydrox 50A", image: "/img/productos/small/hydrox50a.jpg", ficha: "/productos/images/hogar/purificadores/hydrox50a/tabla-h50a.jpg" },
      { name: "Hydrox 60", image: "/img/productos/small/hydrox60.jpg", ficha: "/productos/images/hogar/purificadores/hydrox60/tabla-h60.jpg" },
      { name: "Hydrox 40", image: "/img/productos/small/hydrox40.jpg", ficha: "/productos/images/hogar/purificadores/hydrox40/tabla-h40.jpg" },
    ],
    MaquinasDeHielo: [
      { name: "Icex 90", image: "/img/productos/small/icex40.jpg", ficha: "/productos/images/hogar/maquinasdehielo/icex90/tabla.jpg" },
      { name: "Icex 60", image: "/img/productos/small/icex40.jpg", ficha: "/productos/images/hogar/maquinasdehielo/icex60/tabla1.jpg" },
      { name: "Icex 40", image: "/img/productos/small/icex40.jpg", ficha: "/productos/images/hogar/maquinasdehielo/icex40/tabla-i40.jpg" },
    ],
    MaquinasGourmetDeCafe: [
      { name: "Cappuxino", image: "/img/productos/small/cappuxino.jpg", ficha: "/productos/images/hogar/cafe/cappuxino/tabla-cappuxino.jpg" },
    ],
  },
  Paquetes: [
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1193.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1193.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/small/IMG_1194.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1195.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1196.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1197.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1278.JPG", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1060.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1279.JPG", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1186.jpg", ficha: null },
    { name: null, image: "/productos/images/maquinasdepaquete/IMG_1276.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes06.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes01.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes02.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes03.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes07.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes08.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes09.jpg", ficha: null },
    { name: null, image: "/img/paquetes/paquetes10.jpg", ficha: null },
  ],

  Divididos: [
    { name: null, image: "/img/divididos/imagen01.jpg", ficha: null },
    { name: null, image: "/img/divididos/imagen02.jpg", ficha: null },
    { name: null, image: "/img/divididos/imagen03.jpg", ficha: null },
    { name: null, image: "/img/divididos/imagen04.jpg", ficha: null },
    { name: null, image: "/img/divididos/imagen05.jpg", ficha: null },
    { name: null, image: "/img/divididos/imagen06.jpg", ficha: null },
    { name: null, image: "/img/divididos/imagen07.jpg", ficha: null },
  ],

  EnergiaSolar: [
    { name: null, image: "/img/solar/solar1.jpg", ficha: null },
    { name: null, image: "/img/solar/solar2.jpg", ficha: null },
    { name: null, image: "/img/solar/solar3.jpg", ficha: null },
    { name: null, image: "/productos/solar4.html", ficha: null },
    { name: null, image: "/img/solar/solar5.jpg", ficha: null },
  ],
};


export type Category = {
  title: string;
  link: string;
  objeto?: any
};

// export const categories: Category[] = [
export const categories: Category[] = [
  {
    title: "Minisplit",
    link: "#minisplit",
    objeto: productos.Minisplit
  },
  {
    title: "Linea Hogar",
    link: "#linea-hogar",
    objeto: productos.LineaHogar
  },
  {
    title: "Paquetes",
    link: "#paquetes",
    objeto: productos.Paquetes
  },
  {
    title: "Divididos",
    link: "#divididos",
    objeto: productos.Divididos
  },
  {
    title: "Energia Solar",
    link: "#energis-solar",
    objeto: productos.EnergiaSolar
  },
];
