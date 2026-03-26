
let incidencias = JSON.parse(localStorage.getItem("incidencias")) || [];

const form = document.getElementById("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let incidencia = {

nombre: document.getElementById("nombre").value,
tipo: document.getElementById("tipo").value,
id: document.getElementById("id").value,
carrera: document.getElementById("carrera").value,
telefono: document.getElementById("telefono").value,
fecha: document.getElementById("fecha").value,
motivo: document.getElementById("motivo").value,
descripcion: document.getElementById("descripcion").value,
personal: document.getElementById("personal").value

};

incidencias.push(incidencia);

localStorage.setItem("incidencias", JSON.stringify(incidencias));

alert("Incidencia guardada");

form.reset();

});

}

const tabla = document.getElementById("tabla");

if(tabla){

mostrarDatos(incidencias);

document.getElementById("buscar").addEventListener("keyup", function(){

let texto = this.value.toLowerCase();

let filtrados = incidencias.filter(i =>
i.nombre.toLowerCase().includes(texto) ||
i.id.toLowerCase().includes(texto)
);

mostrarDatos(filtrados);

});

}

function mostrarDatos(lista){

tabla.innerHTML="";

lista.forEach((i,index)=>{

tabla.innerHTML += `
<tr>
<td>${i.nombre}</td>
<td>${i.tipo}</td>
<td>${i.id}</td>
<td>${i.carrera}</td>
<td>${i.motivo}</td>
<td>${i.fecha}</td>
<td>${i.personal}</td>
<td><button onclick="eliminar(${index})">Eliminar</button></td>
</tr>
`;

});

}

function eliminar(index){

incidencias.splice(index,1);

localStorage.setItem("incidencias", JSON.stringify(incidencias));

location.reload();

}

const total = document.getElementById("total");

if(total){

let estudiantes = incidencias.filter(i => i.tipo=="Estudiante").length;
let externos = incidencias.filter(i => i.tipo=="Externo").length;

total.innerText = "Total de incidencias: " + incidencias.length;
document.getElementById("estudiantes").innerText = "Estudiantes: " + estudiantes;
document.getElementById("externos").innerText = "Externos: " + externos;

}

function buscarFecha(){

let fecha = document.getElementById("fechaBuscar").value;

let resultado = incidencias.filter(i => i.fecha == fecha);

document.getElementById("resultadoFecha").innerText =
"Incidencias en esa fecha: " + resultado.length;

}