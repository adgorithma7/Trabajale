/**
 * Vacantes que se muestran en la landing.
 * Las reales se publican en el canal de Telegram; aquí van las destacadas.
 * `ejemplo: true` muestra una etiqueta "Ejemplo": quítala cuando cargues vacantes reales.
 */
export type Modalidad = "Remoto" | "Presencial" | "Híbrido";
/** "venezuela": portada (incluye Táchira); "frontera": Cúcuta y su área metropolitana, lado colombiano (página /cucuta). Las remotas van en ambas. */
export type Zona = "venezuela" | "frontera";

export interface Vacante {
  id: string;
  titulo: string;
  empresa: string; // puede ser "Empresa confidencial"
  ciudad: string;
  modalidad: Modalidad;
  jornada: string;
  publicada: string; // texto corto, ej. "hace 2 días"
  requisitos: string[];
  zona: Zona;
  ejemplo?: boolean;
}

export const vacantes: Vacante[] = [
  {
    id: "atencion-cliente-chat",
    titulo: "Agente de atención al cliente por chat",
    empresa: "Empresa confidencial",
    ciudad: "Toda Venezuela",
    modalidad: "Remoto",
    jornada: "Tiempo completo, turnos rotativos",
    publicada: "hace 2 días",
    requisitos: ["Computadora e internet estable", "Buena redacción", "Mayor de 18 años"],
    zona: "venezuela",
    ejemplo: true,
  },
  {
    id: "asesor-ventas",
    titulo: "Asesor de ventas por WhatsApp",
    empresa: "Empresa confidencial",
    ciudad: "Remoto desde cualquier ciudad",
    modalidad: "Remoto",
    jornada: "Medio tiempo",
    publicada: "hace 4 días",
    requisitos: ["Experiencia en ventas o atención", "Celular con WhatsApp", "Disponibilidad en las tardes"],
    zona: "venezuela",
    ejemplo: true,
  },
  {
    id: "auxiliar-administrativo",
    titulo: "Auxiliar administrativo",
    empresa: "Empresa confidencial",
    ciudad: "San Cristóbal, Táchira",
    modalidad: "Presencial",
    jornada: "Lunes a viernes",
    publicada: "hace 1 semana",
    requisitos: ["Manejo de Excel", "Orden y puntualidad", "Residir en la zona"],
    zona: "venezuela",
    ejemplo: true,
  },
  {
    id: "asesor-tienda-cucuta",
    titulo: "Asesor comercial en tienda (temporada)",
    empresa: "Empresa confidencial",
    ciudad: "Cúcuta, Norte de Santander",
    modalidad: "Presencial",
    jornada: "Diciembre y enero, turnos de 8 horas",
    publicada: "hace 1 día",
    requisitos: ["Atención al público", "Disponibilidad fines de semana", "Residir en Cúcuta o alrededores"],
    zona: "frontera",
    ejemplo: true,
  },
];

/** Vacantes que se muestran en cada página: las remotas aparecen en ambas. */
export function vacantesPara(zona: Zona) {
  return vacantes.filter((v) => v.zona === zona || v.modalidad === "Remoto");
}

export type IconoCategoria =
  | "chat"
  | "ventas"
  | "admin"
  | "soporte"
  | "operaciones"
  | "remoto";

export const categorias: { nombre: string; detalle: string; icono: IconoCategoria }[] = [
  { nombre: "Atención al cliente", detalle: "Chat, llamadas y soporte", icono: "chat" },
  { nombre: "Ventas", detalle: "Asesoría y cierre por WhatsApp", icono: "ventas" },
  { nombre: "Administración", detalle: "Asistencia, datos y oficina", icono: "admin" },
  { nombre: "Soporte técnico", detalle: "Ayuda a usuarios y equipos", icono: "soporte" },
  { nombre: "Operaciones", detalle: "Logística, bodega y campo", icono: "operaciones" },
  { nombre: "Trabajo remoto", detalle: "Desde casa, con tu computadora", icono: "remoto" },
];
