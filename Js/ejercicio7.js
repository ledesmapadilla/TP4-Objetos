class Agenda {
  constructor() {
    this.contactos = [];
  }

  cargarAgenda() {
    const cantidad = 2;
    for (let i = 0; i < cantidad; i++) {
      const nombre = prompt(`ingrese contacto ${i + 1}:`);
      const telefono = parseInt(prompt(`ingrese telefono ${i + 1}:`));
      this.contactos.push({ nombre, telefono });
    }
  }

  mostrarAgenda() {
    document.writeln(`<ul>`);
    this.contactos.map((contacto, index) => {
      document.writeln(`<ul>`);
      document.writeln(
        `<li> Nombre: ${contacto.nombre} --  Telefono: ${contacto.telefono}</li>`
      );
      document.writeln(`</ul>`);
    });
  }

  existeContacto() {
    const contactoPrueba = prompt(`Ingrese el nombre del contacto:`);

    this.contactos.find((item) => contactoPrueba == item);
    console.log(contactoPrueba);
  }
}

const nuevaAgenda = new Agenda();
nuevaAgenda.cargarAgenda();
nuevaAgenda.mostrarAgenda();
nuevaAgenda.existeContacto();


/* FALTA TERMINAR ESTE EJERCICIO */