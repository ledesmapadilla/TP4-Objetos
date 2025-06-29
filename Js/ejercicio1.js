
/* Crear objetos */

const auto = {
  color: `blanco`,
  marca: `Toyota`,

  modelo: `Corolla`,
  anio: `2015`,
  patente: `otx514`,

  encender: () => {
    document.writeln(`<p>Auto encendido</p>`);
  },
  apagar: () => {
    document.writeln(`<p>El auto se apago</p>`);
  },
};
console.log(auto);
auto.encender()
auto.apagar()