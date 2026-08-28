// Datos base para generación de páginas locales (SEO Siloing)
export const seoLocations = [
    { name: "Coquimbo", slug: "coquimbo", region: "IV Región" },
    { name: "La Serena", slug: "la-serena", region: "IV Región" },
    { name: "Ovalle", slug: "ovalle", region: "IV Región" },
    { name: "Andacollo", slug: "andacollo", region: "IV Región" },
    { name: "Copiapó", slug: "copiapo", region: "Atacama" },
    { name: "Vallenar", slug: "vallenar", region: "Atacama" },
    { name: "Illapel", slug: "illapel", region: "IV Región" }
];

export const seoServices = [
    {
        name: "Arriendo de Excavadoras",
        slug: "arriendo-excavadoras",
        description: "Servicio de excavadoras oruga para faenas mineras, zanjas y movimiento de tierras masivo.",
        machineType: "Excavadoras",
        imageUrl: "/machinery/komatsu-pc210lc/main-site-v2.webp"
    },
    {
        name: "Arriendo de Retroexcavadoras",
        slug: "arriendo-retroexcavadoras",
        description: "Retroexcavadoras 4x4 versátiles para obras viales, construcción civil y apoyo en minería.",
        machineType: "Retroexcavadoras",
        imageUrl: "/machinery/jd-310l/main-site-v3.webp"
    },
    {
        name: "Arriendo de Camiones Aljibe",
        slug: "arriendo-camiones-aljibe",
        description: "Distribución de agua, control de polvo y riego industrial con camiones de alta capacidad (hasta 30,000L).",
        machineType: "Camiones Aljibe",
        imageUrl: "/machinery/renault-k480/main-new.webp"
    },
    {
        name: "Arriendo de Cargadores Frontales",
        slug: "arriendo-cargadores-frontales",
        description: "Equipos de carga frontal para acopio, abastecimiento de chancadoras y manejo de graneles.",
        machineType: "Cargadores",
        imageUrl: "/machinery/cat-962l/main-user.webp"
    },
    {
        name: "Arriendo de Semirremolques Cama Baja",
        slug: "arriendo-cama-baja",
        description: "Transporte seguro de maquinaria pesada y equipos sobredimensionados con semirremolques de cuello desmontable y alta capacidad de carga.",
        machineType: "Semirremolques",
        imageUrl: "/machinery/cama-baja/main.jpeg"
    },
    {
        name: "Arriendo de Semirremolques Rampla Plana",
        slug: "arriendo-rampla-plana",
        description: "Semirremolques rampla plana ideales para el transporte de carga general y materiales de construcción de gran envergadura en minería y obras civiles.",
        machineType: "Semirremolques",
        imageUrl: "/machinery/rampla-plana/main.jpeg"
    }
];

// Función para obtener data completa de una URL dada
export const getSeoDataFromUrl = (serviceSlug, citySlug) => {
    const service = seoServices.find(s => s.slug === serviceSlug);
    const location = seoLocations.find(l => l.slug === citySlug);
    return { service, location };
};
