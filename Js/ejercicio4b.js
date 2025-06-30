const notas = [];

const alumno = {
  nombre: prompt(`Ingrese un nombre de alumno`),
  curso: ``,
  calificacion: [],
};

do {
  const nota = parseFloat(
    prompt(`Ingrese las notas del alumno ${alumno.nombre}`)
  );
  notas.push(nota);
} while (confirm(`Desea ingresar otra calificacion para ${alumno.nombre}?`));

console.log(notas);

/* array de las notas */
console.log(notas);

const mayor = Math.max(...notas);
console.log(mayor);

if (mayor >= 0 && mayor <= 4) {
  document.writeln(`La calificacion del alumno ${alumno.nombre} es <b>D</b>`);
} else if (mayor > 4 && mayor <= 6) {
  document.writeln(`La calificacion del alumno ${alumno.nombre} es <b>C</b>`);
} else if (mayor > 6 && mayor <= 8) {
  document.writeln(`La calificacion del alumno ${alumno.nombre} es <b>B</b>`);
} else {
  document.writeln(`La calificacion del alumno ${alumno.nombre} es <b>A</b>`);
}
