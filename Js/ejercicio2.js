const cuenta = {
  titular: `Alex`,
  saldo: [0],

  ingresar: () => {
    const ingreso = parseInt(prompt(`Ingrese un monto a depositar: `));
    cuenta.saldo.push(ingreso);
    const saldoActual = cuenta.saldo.reduce((total, saldo) => total + saldo, 0);
    alert(` Su saldo actual es: $ ${saldoActual}`); 
  },

  extraer: () => {
    const egreso = parseInt(prompt(`Ingrese un monto a extraer: `));
    cuenta.saldo.push(-egreso);
    const saldoActual = cuenta.saldo.reduce((total, saldo) => total + saldo, 0);
    alert(`Su saldo actual es: $ ${saldoActual}`);
  },

  informar: () => {
    const saldoActual = cuenta.saldo.reduce((total, saldo) => total + saldo, 0);

    document.writeln(
      `<p class= p-3> El saldo actual de la cuenta de ${cuenta.titular} es: $ ${saldoActual}</p>`
    );
  },
};

cuenta.ingresar();
cuenta.extraer();
cuenta.informar();

console.log(cuenta.saldo);

