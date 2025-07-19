const ramos = {
  "Química general y orgánica": { desbloquea: ["Farmacología general y aplicada"] },
  "Biología celular": { desbloquea: ["Microbiología y parasitología", "Farmacología general y aplicada"] },
  "Introducción a la matronería": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería I"] },
  "Inglés I": { desbloquea: ["Inglés II"] },
  "Habilidades Comunicativas": {},
  "Cuidados Médico-Quirúrgicos de matronería I": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería II"] },
  "Microbiología y parasitología": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería II", "Bases perinatales y ginecológicas"] },
  "Morfología general": { desbloquea: ["Cuidados Médico-Quirúrgicos de matronería II", "Bases perinatales y ginecológicas"] },
  "Salúd pública": { desbloquea: ["Políticas en salúd sexual y reproductiva", "Administración y gestión en salud", "Neonatología, lactancia y gestión", "Bioestadística"] },
  "Inglés II": { desbloquea: ["Inglés III"] },
  "Cuidados Médico-Quirúrgicos de matronería II": { desbloquea: ["Salud sexual, Salud reproductiva y gestión I", "Integrador I: Cuidados Médico-Quirúrgicos de matronería"] },
  "Bases perinatales y ginecológicas": { desbloquea: ["Matronería y bases fisiopatológicas de la salud", "Neonatología, lactancia y gestión"] },
  "Políticas en salúd sexual y reproductiva": { desbloquea: ["Integrador I: Cuidados Médico-Quirúrgicos de matronería", "Salud sexual, Salud reproductiva y gestión I", "Psicología integral y técnicas de entrevista clínica", "Bioestadística", "Educación con enfoque curso de vida", "Salud familiar y comunitaria", "Matronería legal y Bioética", "Neonatología, lactancia y gestión", "Metodología de la investigación"] },
  "Pensamiento crítico": {},
  "Inglés III": { desbloquea: ["Inglés IV"] },
  "Matronería y bases fisiopatológicas de la salud": { desbloquea: ["Salud sexual, Salud reproductiva y gestión II", "Matronería legal y Bioética"] },
  "Salud sexual, Salud reproductiva y gestión I": { desbloquea: ["Salud sexual, Salud reproductiva y gestión II", "Educación con enfoque curso de vida", "Salud familiar y comunitaria"] },
  "Administración y gestión en salud": {},
  "Integrador I: Cuidados Médico-Quirúrgicos de matronería": {},
  "Inglés IV": {},
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
  "Habilitación profesional I": {},
  "Habilitación profesional II": {}
};

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById('malla');
  for (let ramo in ramos) {
    const div = document.createElement('div');
    div.className = 'ramo';
    div.textContent = ramo;
    div.id = ramo;
    container.appendChild(div);
  }
  activarIniciales();
  agregarEventos();
}

function activarIniciales() {
  for (let ramo in ramos) {
    if (!Object.values(ramos).some(r => r.desbloquea?.includes(ramo))) {
      activarRamo(ramo);
    }
  }
}

function activarRamo(nombre) {
  const el = document.getElementById(nombre);
  if (el && !el.classList.contains('completado')) {
    el.classList.add('activo');
    el.onclick = () => aprobarRamo(nombre);
  }
}

function aprobarRamo(nombre) {
  if (!document.getElementById(nombre).classList.contains('activo')) return;
  document.getElementById(nombre).classList.remove('activo');
  document.getElementById(nombre).classList.add('completado');
  aprobados.add(nombre);

  if (ramos[nombre]?.desbloquea) {
    ramos[nombre].desbloquea.forEach(activarRamo);
  }
}

document.addEventListener('DOMContentLoaded', crearMalla);

