const mirage = "@/assets/mirage.webp"
const syp = "@/assets/s&p-logo.svg"

export const CardsHome = [
  {
    title: "Servicios",
    description: [
      {
        type: "string",
        content: "Venta"
      },
      {
        type: "string",
        content: "Instalacion"
      },
      {
        type: "string",
        content: "Reparaciones"
      },
      {
        type: "string",
        content: "Mantenimiento"
      }
    ],
    link: "/servicios"
  },
  {
    title: "Productos",
    description: [
      {
        type: "string",
        content: "Somos Distribuidores autorizados de los Productos"
      },
      {
        type: "img",
        content: "/img/mirage-Logo.webp",
        className: "mirage-logo"
      },
      {
        type: "img",
        content: '/img/s&p-logo.svg',
        className: "syp-logo"
      },
      {
        type: "string",
        content: "Ventilacion y Extracción"
      }
    ],
    link: "/productos"
  },
  {
    title: "Promociones",
    description: [
      {
        type: "string",
        content: "Contamos con una gran variedad de promociones"
      }
    ],
    link: "/promociones"
  },
  {
    title: "Descuentos",
    description: [
      {
        type: "string",
        content: "Visite nuestra sección de oferta para conocer los prouctos que tenemos en descuento"
      }
    ],
    link: "/descuentos"
  },
]
