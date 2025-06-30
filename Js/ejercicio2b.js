const notas = [];

do {
  const estudiante = {
    nombre: prompt(`ingresa el nombre del estudiante`),
    nota: parseInt(prompt(`ingresa la nota del estudiante`)),
  };
  notas.push(estudiante);
  

} while (confirm(`Desea ingresar otro estudiante?`));

/* armar un array con las notas */

const soloNotas = notas.map((item) => item.nota);

console.log(soloNotas);

/* sumar las notas */

const suma = soloNotas.reduce((item, nota) => item + nota, 0);

console.log(suma);

const promedio= suma/notas.length

document.writeln(`El promedio de todas las notas es ${promedio}`)