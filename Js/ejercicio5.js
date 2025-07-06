class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #pesoyAltura;
  #anioNacimiento;
  constructor(nombre, edad, dni, sexo, pesoyAltura, anioNacimiento) {
    (this.#nombre = nombre),
      (this.#edad = edad),
      (this.#dni = dni),
      (this.#sexo = sexo),
      (this.#pesoyAltura = pesoyAltura),
      (this.#anioNacimiento = anioNacimiento);
  }

  get getnombre() {
    return this.#nombre;
  }
  get getedad() {
    return this.#edad;
  }
  get getdni() {
    return this.#dni;
  }
  get getsexo() {
    return this.#sexo;
  }
  get getpesoyAltura() {
    return this.#pesoyAltura;
  }
  get getanioNacimiento() {
    return this.#anioNacimiento;
  }

  set setnombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }
  set setedad(nuevoEdad) {
    this.#edad = nuevoEdad;
  }
  set setdni(nuevoDni) {
    this.#dni = nuevoDni;
  }
  set setsexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }
  set setpesoyAltura(nuevoPesoyAltura) {
    this.#pesoyAltura = nuevoPesoyAltura;
  }
  set setanioNacimiento(nuevoAnioNacimiento) {
    this.#anioNacimiento = nuevoAnioNacimiento;
  }

  /* metodos */

  mostrarGeneracion() {
    const generacion = this.#anioNacimiento;
    console.log(this.#anioNacimiento);
    document.writeln(`<h3 class=p-3>${this.#nombre}</h3>`);
    if (generacion >= 1930 && generacion <= 1948) {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Silent Generation y su rasgo caracteristico es la Austeridad 😑</p>`
      );
    } else if (generacion >= 1949 && generacion <= 1968) {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Baby Boom y su rasgo caracteristico es la Ambicion 🙂</p>`
      );
    } else if (generacion >= 1969 && generacion <= 1980) {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Generacion X y su rasgo caracteristico es la Obsecion por el exito 😎</p>`
      );
    } else if (generacion >= 1981 && generacion <= 1993) {
      document.writeln(
        `  <p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Generacion Y, y su rasgo caracteristico es la Frustracion 😌</p>`
      );
    } else {
      document.writeln(
        `<p class=ps-2>La persona <b>${
          this.#nombre
        }</b> pertenece a la generacion Generacion Z y su rasgo caracteristico es la Irreverencia 😛</p>`
      );
    }
  }

  mostrarMayoriaEdad() {
    const mayoria = this.#edad;
    const mayoriaAnio = 2025 - this.#anioNacimiento;
    console.log(mayoriaAnio);
    if (mayoria >= 18 && mayoriaAnio >= 18) {
      document.writeln(
        `<p class=ps-2><b>${this.#nombre}</b> es mayor de edad</p>`
      );
    } else {
      document.writeln(
        `<p class=ps-2><b>${this.#nombre}</b> es menor de edad</p>`
      );
    }
  }

  mostrarDatos() {
    document.writeln(`<ul class=list-group>`);
    document.writeln(
      `<li class=list-group-item> <b>Nombre:</b> ${this.#nombre}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Edad:</b> ${this.#edad}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>DNI:</b> ${this.#dni}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Sexo:</b> ${this.#sexo}</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Peso y altura:</b> ${
        this.#pesoyAltura
      }</li>`
    );
    document.writeln(
      `<li class=list-group-item> <b>Año de nacimiento:</b> ${
        this.#anioNacimiento
      }</li>`
    );

    document.writeln(`</ul>`);
  }
}

/* crear objeto */
let numeroDocumento = Math.round(Math.random() * 50000000);


const nacho = new Persona(
  `Ignacio`,
  53,
  numeroDocumento,
  `hombre`,
  `90 kg - 1,78 `,
  1971
);

nacho.mostrarGeneracion();
nacho.mostrarMayoriaEdad();
nacho.mostrarDatos();

console.log(Persona.nacho);
