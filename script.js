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
  // Puedes seguir añadiendo más semestres aquí siguiendo la misma estructura
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
      
      // Chequea si el ramo está aprobado
      const estaAprobado = estadoRamos[ramo.nombre];
      
      // Chequea si los requisitos están aprobados (los que abren este ramo)
      const requisitosListos = puedeAprobar(ramo);
      
      if (estaAprobado) {
        divRamo.classList.add("aprobado");
      } else if (!requisitosListos) {
        divRamo.classList.add("bloqueado");
      }
      
      divRamo.addEventListener("click", () => {
        if (divRamo.classList.contains("bloqueado")) return;
        
        // Cambiar estado aprobado/no aprobado
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
  // Un ramo se puede aprobar si todos sus requisitos están aprobados
  // En esta estructura, el requisito es aprobar el ramo que lo "abre"
  // Así que buscamos todos los ramos que abren este ramo
  const requisitos = [];

  for (const sem in malla) {
    for (const r of malla[sem]) {
      if (r.abre && r.abre.includes(ramo.nombre)) {
        requisitos.push(r.nombre);
      }
    }
  }

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
