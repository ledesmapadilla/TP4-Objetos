class Producto {
  #codigo;
  #nombre;
  #precio;
  constructor(codigo, nombre, precio) {
    (this.#codigo = codigo), (this.#nombre = nombre), (this.#precio = precio);
  }

  get getcodigo() {
    return this.#codigo;
  }
  get getnombre() {
    return this.#nombre;
  }
  get getprecio() {
    return this.#precio;
  }

  set setcodigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }
  set setnombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set setprecio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  /* metodos */

  imprimirDatos() {
    document.writeln(`<p class=pt-2><b>Codigo:</b> ${this.#codigo}</p>`);
    document.writeln(`<p><b>Nombre:</b> ${this.#nombre}</p>`);
    document.writeln(`<p><b>Precio:</b> ${this.#precio}</p><br>`);
  }
}

/* crear objetos */
const producto1 = new Producto(`AL`, `Alfajor Bagley`, `$100`);
const producto2 = new Producto(`GA`, `Galletas Sonrisa`, `$500`);
const producto3 = new Producto(`CH`, `Chocolate Block`, `$300`);

producto1.imprimirDatos()
producto2.imprimirDatos()
producto3.imprimirDatos() 


/* creo array de productos */

const productos = [];

productos.push(producto1);
productos.push(producto2);
productos.push(producto3);

console.log(productos);

