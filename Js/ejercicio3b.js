const libros = [];

do {
  const libro = {
    titulo: prompt(`Ingresa el nombre de un libro`),
    autor: ``,
    anio: ``,
    genero: prompt(`Ingresa el genero del libro`),
  };

  console.log(libros);
  libros.push(libro);
} while (confirm(`Desea ingresar otro libro?`));

/* Pido que genero deseo filtrar */

const generoElejido = prompt(`De que genero desea ver libros?`);

/* Hago array de libros del genero deseado */

const librosGenero = libros.filter((item) => item.genero == generoElejido);

console.log(librosGenero);

/* Presentar por pantalla */

/* document.writeln(`<ul class= "list-group">`);

librosGenero.map((item) =>
  document.writeln(`<li class="list-group-item">  ${item.titulo}</li>`)
);
document.writeln(`</ul>`); */

if (librosGenero.length > 0) {
  document.writeln(`Los libros del genero ${generoElejido} son: `);
  document.writeln(`<ul class= "list-group">`);
  librosGenero.forEach((item) =>
    document.writeln(`<li class="list-group-item">  ${item.titulo}</li>`)
  );
  document.writeln(`</ul>`);
} else document.writeln(`No hay libros de ese genero`);
