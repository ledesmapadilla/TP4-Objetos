/* Objeto persona */

const persona = {
  nombre: `ignacio`,
  edad: 53,
  hobies: [`bicicleta`, `armar rompecabezas`, `tenis`],
};

console.log(persona);

document.writeln(persona.nombre);

/* Funcion para añadir hobie si el nombre agregado coincide con el de la persona */
const agregar = () => {
  persona.hobies.push(hobie);
};
const nombre = prompt(`Ingrese un nombre`);
const hobie = prompt(`Ingrese un nuevo hobie`);

if (nombre === persona.nombre) {
  agregar();
}

/* imprimir en pantalla el listado de los hobies */

const listahobies = persona.hobies;

document.writeln(`<ul>`);
listahobies.map((item) => document.writeln(`<li>${item}</li>`));
document.writeln(`</ul>`);
