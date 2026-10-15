
// Ejercicio 14. Precios con IVA
// Enunciado:
// Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más IVA
// del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA. Escribe
// también la versión con for en otra función y comprueba que las dos den el mismo resultado.

const TASA_IVA = 0.19;

const leerCantidad = (mensaje) => {
  let cantidad = Number(prompt(mensaje));
  while (isNaN(cantidad) || cantidad < 1 || cantidad !== Math.floor(cantidad)) {
    cantidad = Number(prompt(mensaje + " (debe ser un entero mayor o igual a 1)"));
  }
  return cantidad;
};

const leerPrecios = (cantidad) => {
  let precios = [];
  for (let i = 0; i < cantidad; i++) {
    precios.push(Number(prompt("Precio " + (i + 1) + ":")));
  }
  return precios;
};

const calcularConIva = (precio) => {
  return Math.round(precio * (1 + TASA_IVA));
};

const aplicarIvaConMap = (precios) => {
  return precios.map((precio) => calcularConIva(precio));
};

const aplicarIvaConFor = (precios) => {
  let conIva = [];
  for (let i = 0; i < precios.length; i++) {
    conIva.push(calcularConIva(precios[i]));
  }
  return conIva;
};

const calcularTotal = (numeros) => {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
};

const verificarIgualdad = (listaA, listaB) => {
  if (listaA.length !== listaB.length) {
    return false;
  }
  for (let i = 0; i < listaA.length; i++) {
    if (listaA[i] !== listaB[i]) {
      return false;
    }
  }
  return true;
};

const unirConComas = (lista) => {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    texto = texto + lista[i];
    if (i < lista.length - 1) {
      texto = texto + ", ";
    }
  }
  return texto;
};

let cantidad = leerCantidad("¿Cuántos productos?");
let precios = leerPrecios(cantidad);

let conIvaMap = aplicarIvaConMap(precios);
let conIvaFor = aplicarIvaConFor(precios);

console.log("Sin IVA: " + unirConComas(precios));
console.log("Con IVA: " + unirConComas(conIvaMap));
console.log("Total con IVA: $" + calcularTotal(conIvaMap));

if (verificarIgualdad(conIvaMap, conIvaFor)) {
  console.log("Verificación: la versión con map y la versión con for dan el mismo resultado");
} else {
  console.log("Verificación: ¡las dos versiones NO coinciden!");
}
