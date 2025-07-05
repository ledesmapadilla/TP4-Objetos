class Rectangulo {
  #alto;
  #ancho;
  constructor(alto, ancho) {
    this.#alto = alto;
    this.#ancho = ancho;
  }

  get getalto() {
    return this.#alto;
    return this.#ancho;
  }

  /* metodos */

  /* Modificar datos */
  cambiarAlto(nuevoAlto) {
    this.#alto = nuevoAlto;
  }
  cambiarAncho(nuevoAncho) {
    this.#ancho = nuevoAncho;
  }

  /* Mostrar datos */
  mostrarDatos() {
    document.writeln(`<p>Rectangulo</p> <ul>
    <li>Alto: ${this.#alto}</li>
    <li>Ancho: ${this.#ancho}</li>
    </ul>`);
    console.log(this.mostrarDatos);
  }

  /* Area */
  calcularPerimetro() {
    document.writeln(
      `<p class=p-1>El perimetro del rectangulo es: ${
        this.#alto * 2 + this.#ancho * 2
      }</p>`
    );
  }

  /* Perimetro */
  calcularArea() {
    document.writeln(
      `<p class=p-1>El area del rectangulo es:  ${this.#alto * this.#ancho}</p>`
    );
  }
}

/* creo objetos */
const rectangulo1 = new Rectangulo(200, 100);

/* pruebo metodos */
rectangulo1.mostrarDatos();
rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();

console.log(rectangulo1);
