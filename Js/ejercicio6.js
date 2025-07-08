class Libro {
  #titulo;
  #autor;
  #isbn;
  #numeroDePaginas;

  constructor(titulo, autor, isbn, numeroDePaginas) {
    this.#titulo = titulo;
    this.#autor = autor;
    this.#isbn = isbn;
    this.#numeroDePaginas = numeroDePaginas;
  }

  get gettitulo() {
    return this.#titulo;
  }
  get getautor() {
    return this.#autor;
  }
  get getisbn() {
    return this.#isbn;
  }
  get getnumeroDePaginas() {
    return this.#numeroDePaginas;
  }

  set settitulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  set setautor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  set setisbn(nuevoIsbn) {
    this.#isbn = nuevoIsbn;
  }
  set setnumeroDePaginas(nuevoNumeroDePaginas) {
    this.#numeroDePaginas = nuevoNumeroDePaginas;
  }

  /* metodos */

  mostrarLibro() {
    document.writeln(
      `<p class=p-2>El libro <b>${this.#titulo}</b>, con ISBN <b>${
        this.#isbn
      }</b>, creado por el autor <b>${this.#autor}</b>, tiene <b>${
        this.#numeroDePaginas
      }</b> paginas </p>`
    );
  }
}



/* crear objetos */
const cienAnios = new Libro(
  `Cien años de soledad`,
  `Garcia Marquez`,
  `843760494X`,
  7000
);
const martinFierro = new Libro(
  `MartinFierro`,
  `Jose Hernandez`,
  `09789871093410`,
  1000
);

const laCasa = new Libro(
  `La Casa de los Espiritus`,
  `Isabel Allende`,
  `0525433473`,
  600
);

cienAnios.mostrarLibro();
martinFierro.mostrarLibro();
laCasa.mostrarLibro();

/* const masLargo = Math.max(
  cienAnios.getnumeroDePaginas,
  martinFierro.getnumeroDePaginas,
  laCasa.getnumeroDePaginas
); */

/* libro mas largo */

if (
  cienAnios.getnumeroDePaginas > martinFierro.getnumeroDePaginas &&
  cienAnios.getnumeroDePaginas > laCasa.getnumeroDePaginas
) {
  document.writeln(`<p class= ps-2>El libro mas largo es <b>Cien Años de Soledad</b> </p>`)} else if (
    martinFierro.getnumeroDePaginas > cienAnios.getnumeroDePaginas &&
    martinFierro.getnumeroDePaginas > laCasa.getnumeroDePaginas
  ){
    document.writeln(`<p class= ps-2>El libro mas largo es <b>Martin Fierro</b> </p>`);
  } else document.writeln(
    `<p class= ps-2>El libro mas largo es <b>La casa de los Espiritus</b> </p>`
  );
    
  
  
  
  
  
  
  

