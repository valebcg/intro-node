const { registrar, leer } = require("./operaciones");

const [comando, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2);

if (comando === "registrar") {
  if (
    nombre === undefined ||
    edad === undefined ||
    tipo === undefined ||
    color === undefined ||
    enfermedad === undefined
  ) {
    console.log("Falta rellenar campos");
    return;
  } else if (isNaN(edad)) {
    console.log("La edad debe ser numérico");
    return;
  }

  registrar(nombre, edad, tipo, color, enfermedad);
} else if (comando === "leer") {
  leer();
} else {
  console.log("El comando ingresado es inválido");
}
