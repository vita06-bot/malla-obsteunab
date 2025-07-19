const malla = {
  "I semestre": [
    { nombre: "Química general y orgánica", abre: ["Farmacología general y aplicada"] },
    { nombre: "Biología celular", abre: ["Microbiología y parasitología", "Farmacología general y aplicada"] },
    { nombre: "Introducción a la matronería", abre: ["Cuidados Médico-Quirúrgicos de matronería I"] },
    { nombre: "Inglés I", abre: ["Inglés II"] },
    { nombre: "Habilidades Comunicativas" },
  ],
  "II semestre": [
    { nombre: "Cuidados Médico-Quirúrgicos de matronería I", abre: ["Cuidados Médico-Quirúrgicos de matronería II"] },
    { nombre: "Microbiología y parasitología", abre: ["Cuidados Médico-Quirúrgicos de matronería II", "Bases perinatales y ginecológicas"] },
    { nombre: "Morfología general", abre: ["Cuidados Médico-Quirúrgicos de matronería II", "Bases perinatales y ginecológicas"] },
    { nombre: "Salúd pública", abre: ["Políticas en salúd sexual y reproductiva", "Administración y gestión en salud", "Neonatología, lactancia y gestión", "Bioestadística"] },
    { nombre: "Inglés II", abre: ["Inglés III"] },
  ],
  "III semestre": [
    { nombre: "Cuidados Médico-Quirúrgicos de matronería II", abre: ["Salud sexual, Salud reproductiva y gestión I", "Integrador I: Cuidados Médico-Quirúrgicos de matronería"] },
    { nombre: "Bases perinatales y ginecológicas", abre: ["Matronería y bases fisiopatológicas de la salud", "Neonatología, lactancia y gestión"] },
    { nombre: "Políticas en salúd sexual y reproductiva", abre: ["Integrador I: Cuidados Médico-Quirúrgicos de matronería", "Salud sexual, Salud reproductiva y gestión I", "Psicología integral y técnicas de entrevista clínica", "Bioestadística", "Educación con enfoque curso de vida", "Salud familiar y comunitaria", "Matronería legal y Bioética", "Neonatología, lactancia y gestión", "Metodología de la investigación"] },
    { nombre: "Pensamiento crítico" },
    { nombre: "Inglés III", abre: ["Inglés IV"] },
  ],
  "IV semestre": [
    { nombre: "Matronería y bases fisiopatológicas de la salud", abre: ["Salud sexual, Salud reproductiva y gestión II", "Matronería legal y Bioética"] },
    { nombre: "Salud sexual, Salud reproductiva y gestión I", abre: ["Salud sexual, Salud reproductiva y gestión II", "Educación con enfoque curso de vida", "Salud familiar y comunitaria"] },
    { nombre: "Administración y gestión en salud" },
    { nombre: "Integrador I: Cuidados Médico-Quirúrgicos de matronería" },
    { nombre: "Inglés IV" },
  ],
  "V semestre": [
    { nombre: "Salud sexual, Salud reproductiva y gestión II", abre: ["Matronería patológica integrada y gestión", "Sexología, género y derecho"] },
    { nombre: "Farmacología general y aplicada", abre: ["Matronería patológica integrada y gestión"] },
    { nombre: "Neonatología, lactancia y gestión", abre: ["Educación con enfoque curso de vida", "Salud familiar y comunitaria", "Matronería patológica integrada y gestión"] },
    { nombre: "Psicología integral y técnicas de entrevista clínica", abre: ["Intervención en contextos sociales y comunitarios"] },
  ],
  "VI semestre": [
    { nombre: "Educación con enfoque curso de vida", abre: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
    { nombre: "Salud familiar y comunitaria", abre: ["Intervención en contextos sociales y comunitarios"] },
    { nombre: "Bioestadística", abre: ["Metodología de la investigación"] },
    { nombre: "Matronería patológica integrada y gestión", abre: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
  ],
  "VII semestre": [
    { nombre: "Sexología, género y derecho", abre: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
    { nombre: "Matronería legal y Bioética", abre: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
    { nombre: "Intervención en contextos sociales y comunitarios", abre: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida"] },
    { nombre: "Metodología de la investigación", abre: ["Imagenología en matronería", "Integrador II: práctica de matronería en la comunidad", "Matronería oncológica y reproducción asistida", "Proyecto de matronería"] },
  ],
  "VIII semestre": [
    { nombre: "Imagenología en matronería", abre: ["Habilitación profesional I", "Habilitación profesional II"] },
    { nombre: "Integrador II: práctica de matronería en la comunidad", abre: ["Habilitación profesional I", "Habilitación profesional II"] },
    { nombre: "Matronería oncológica y reproducción asistida", abre: ["Habilitación profesional I", "Habilitación profesional II"] },
    { nombre: "Proyecto de matronería", abre: ["Habilitación profesional I", "Habilitación profesional II"] },
  ],
  "IX semestre": [
    { nombre: "Habilitación profesional I" },
  ],
  "X semestre": [
    { nombre: "Habilitación profesional II" },
  ],
};

const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos")) || {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let semestre in malla) {
    const divSem = document.createElement("div");
    divSem.classList.add("semestre");

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSem.appendChild(titulo);

    malla[semestre].forEach((ramo) => {
      const divRamo = document.createElement("div");
      divRamo.textContent = ramo.nombre;
      divRamo.classList.add("ramo");

      const estaAprobado = estadoRamos[ramo.nombre];
      const requisitosListos = puedeAprobar(ramo);

      if (estaAprobado) {
        divRamo.classList.add("aprobado");
      } else if (!requisitosListos) {
        divRamo.classList.add("bloqueado");
      }

      divRamo.addEventListener("click", () => {
        if (divRamo.classList.contains("bloqueado")) return;
        const nuevoEstado = !divRamo.classList.contains("aprobado");
        estadoRamos[ramo.nombre] = nuevoEstado;
        guardarEstado();
        crearMalla();
      });

      divSem.appendChild(divRamo);
    });

    contenedor.appendChild(divSem);
  }
}

function puedeAprobar(ramo) {
  const requisitos = [];
  for (const sem in malla) {
    for (const r of malla[sem]) {
      if (r.abre && r.abre.includes(ramo.nombre)) {
        requisitos.push(r.nombre);
      }
    }
  }
  if (requisitos.length === 0) return true; // Sin requisitos, desbloqueado
  return requisitos.every(req => estadoRamos[req]);
}

function guardarEstado() {
  localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

function reiniciarMalla() {
  if (confirm("¿Estás segura de reiniciar el progreso?")) {
    localStorage.removeItem("estadoRamos");
    location.reload();
  }
}

window.onload = crearMalla;
