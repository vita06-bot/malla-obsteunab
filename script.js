// Datos de los ramos con sus prerequisitos (requisitos para desbloquear)
const ramosData = {
  "Química general y orgánica": { desbloquea: ["Farmacología general y aplicada"] },
  "Biología celular": { desbloquea: ["Microbiología y parasitología", "Farmacología general y aplicada"] },
  "Introducción a la matronería": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería I"] },
  "Inglés I": { desbloquea: ["Inglés II"] },
  "Habilidades Comunicativas": { desbloquea: [] },

  "Cuidados Médico-Quirúrgicos de matronería I": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería II"] },
  "Microbiología y parasitología": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería II", "Bases perinatales y ginecológicas"] },
  "Morfología general": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería II", "Bases perinatales y ginecológicas"] },
  "Salúd pública": { desbloquea: ["Políticas en salúd sexual y reproductiva", "Administración y gestión en salud", "Neonatología, lactancia y gestión", "Bioestadística"] },
  "Inglés II": { desbloquea: ["Inglés III"] },

  "Cuidados Médico-Quirúrgicos de matronería II": { desbloquea: ["Salud sexual, Salud reproductiva y gestión I", "Integrador I: Cuidados Médico-Quirúrgicos de matronería"] },
  "Bases perinatales y ginecológicas": { desbloquea: ["Matronería y bases fisiopatológicas de la salud", "Neonatología, lactancia y gestión"] },
  "Políticas en salúd sexual y reproductiva": { desbloquea: [
    "Integrador I: Cuidados Médico-Quirúrgicos de matronería",
    "Salud sexual, Salud reproductiva y gestión I",
    "Psicología integral y técnicas de entrevista clínica",
    "Bioestadística",
    "Educación con enfoque curso de vida",
    "Salud familiar y comunitaria",
    "Matronería legal y Bioética",
    "Neonatología, lactancia y gestión",
    "Metodología de la investigación"
  ]},
  "Pensamiento crítico": { desbloquea: [] },
  "Inglés III": { desbloquea: ["Inglés IV"] },

  "Matronería y bases fisiopatológicas de la salud": { desbloquea: ["Salud sexual, Salud reproductiva y gestión II", "Matronería legal y Bioética"] },
  "Salud sexual, Salud reproductiva y gestión I": { desbloquea: ["Salud sexual, Salud reproductiva y gestión II", "Educación con enfoque curso de vida", "Salud familiar y comunitaria"] },
  "Administración y gestión en salud": { desbloquea: [] },
  "Integrador I: Cuidados Médico-Quirúrgicos de matronería": { desbloquea: [] },
  "Inglés IV": { desbloquea: [] },

  "Salud sexual, Salud reproductiva y gestión II": { desbloquea: ["Matronería patológica integrada y gestión", "Sexología, género y derecho"] },
  "Farmacología general y aplicada": { desbloquea: ["Matronería patológica integrada y gestión"] },
  "Neonatología, lactancia y gestión": { desbloquea: ["Educación con enfoque curso de vida", "Salud familiar y comunitaria", "Matronería patológica integrada y gestión"] },
  "Psicología integral y técnicas de entrevista clínica": { desbloquea: ["Intervención en contextos sociales y comunitarios"] },

  "Educación con enfoque curso de vida": { desbloquea: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
  "Salud familiar y comunitaria": { desbloquea: ["Intervención en contextos sociales y comunitarios"] },
  "Bioestadística": { desbloquea: ["Metodología de la investigación"] },
  "Matronería patológica integrada y gestión": { desbloquea: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },

  "Sexología, género y derecho": { desbloquea: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
  "Matronería legal y Bioética": { desbloquea: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
  "Intervención en contextos sociales y comunitarios": { desbloquea: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
  "Metodología de la investigación": { desbloquea: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida", "Proyecto de matronería"] },

  "Imagenología en matronería": { desbloquea: ["Habilitación profesional I", "Habilitación profesional II"] },
  "Integrador II: práctica de matronería en la comunidad": { desbloquea: ["Habilitación profesional I", "Habilitación profesional II"] },
  "Matronería oncológica y reproducción asistida": { desbloquea: ["Habilitación profesional I", "Habilitación profesional II"] },
  "Proyecto de matronería": { desbloquea: ["Habilitación profesional I", "Habilitación profesional II"] },

  "Habilitación profesional I": { desbloquea: [] },
  "Habilitación profesional II": { desbloquea: [] },
};

// Organización de ramos por semestre para el diseño horizontal
const semestres = [
  { nombre: "Primer Año - I Semestre", ramos: ["Química general y orgánica", "Biología celular", "Introducción a la matronería", "Inglés I", "Habilidades Comunicativas"] },
  { nombre: "Primer Año - II Semestre", ramos: ["Cuidados Médico-Quirúrgicos de matronería I", "Microbiología y parasitología", "Morfología general", "Salúd pública", "Inglés II"] },

  { nombre: "Segundo Año - III Semestre", ramos: ["Cuidados Médico-Quirúrgicos de matronería II", "Bases perinatales y ginecológicas", "Políticas en salúd sexual y reproductiva", "Pensamiento crítico", "Inglés III"] },
  { nombre: "Segundo Año - IV Semestre", ramos: ["Matronería y bases fisiopatológicas de la salud", "Salud sexual, Salud reproductiva y gestión I", "Administración y gestión en salud", "Integrador I: Cuidados Médico-Quirúrgicos de matronería", "Inglés IV"] },

  { nombre: "Tercer Año - V Semestre", ramos: ["Salud sexual, Salud reproductiva y gestión II", "Farmacología general y aplicada", "Neonatología, lactancia y gestión", "Psicología integral y técnicas de entrevista clínica"] },
  { nombre: "Tercer Año - VI Semestre", ramos: ["Educación con enfoque curso de vida", "Salud familiar y comunitaria", "Bioestadística", "Matronería patológica integrada y gestión"] },

  { nombre: "Cuarto Año - VII Semestre", ramos: ["Sexología, género y derecho", "Matronería legal y Bioética", "Intervención en contextos sociales y comunitarios", "Metodología de la investigación"] },
  { nombre: "Cuarto Año - VIII Semestre", ramos: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida", "Proyecto de matronería"] },

  { nombre: "Quinto Año - IX y X Semestre", ramos: ["Habilitación profesional I", "Habilitación profesional II"] },
];

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById('malla-container');

  semestres.forEach(sem => {
    // Crear contenedor semestre
    const divSemestre = document.createElement('div');
    divSemestre.className = 'semestre';

    // Etiqueta semestre
    const label = document.createElement('div');
    label.className = 'semestre-label';
    label.textContent = sem.nombre;
    divSemestre.appendChild(label);

    // Contenedor horizontal para ramos
    const fila = document.createElement('div');
    fila.className = 'ramos-fila';

    sem.ramos.forEach(nombre => {
      const ramoDiv = document.createElement('div');
      ramoDiv.className = 'ramo bloqueado';
      ramoDiv.textContent = nombre;
      ramoDiv.id = nombre;
      fila.appendChild(ramoDiv);
    });

    divSemestre.appendChild(fila);
    container.appendChild(divSemestre);
  });

  // Activar ramos iniciales
  activarIniciales();
  agregarEventos();
}

function activarIniciales() {
  // Los ramos que no son desbloqueados por ninguno están activos desde inicio
  for (let ramo in ramosData) {
    const esRequisito = Object.values(ramosData).some(r => r.desbloquea.includes(ramo));
    if (!esRequisito) {
      activarRamo(ramo);
    }
  }
}

function activarRamo(nombre) {
  const el = document.getElementById(nombre);
  if (el && !el.classList.contains('aprobado')) {
    el.classList.remove('bloqueado');
    el.classList.add('activo');
    el.style.cursor = 'pointer';
  }
}

function agregarEventos() {
  const elementos = document.querySelectorAll('.ramo');
  elementos.forEach(el => {
    el.addEventListener('click', () => {
      if (el.classList.contains('activo')) {
        aprobarRamo(el.id);
      }
    });
  });
}

function aprobarRamo(nombre) {
  const el = document.getElementById(nombre);
  if (!el || !el.classList.contains('activo')) return;

  el.classList.remove('activo');
  el.classList.add('aprobado');
  el.style.cursor = 'default';
  aprobados.add(nombre);

  // Desbloquear ramos que dependen de este
  if (ramosData[nombre]?.desbloquea) {
    ramosData[nombre].desbloquea.forEach(desbloqueado => {
      // Solo desbloquea si no está aprobado todavía
      if (!aprobados.has(desbloqueado)) {
        activarRamo(desbloqueado);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', crearMalla);
