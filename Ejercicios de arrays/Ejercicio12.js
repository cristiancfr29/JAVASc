
// Ejercicio 12. Rotar la fila
// Enunciado:
// En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al
// inicio. Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor
// que N: rotar 7 en una fila de 5 es lo mismo que rotar 2.

const leerCantidad = (mensaje) => {
  let cantidad = Number(prompt(mensaje));
  while (isNaN(cantidad) || cantidad < 1 || cantidad !== Math.floor(cantidad)) {
    cantidad = Number(prompt(mensaje + " (debe ser un entero mayor o igual a 1)"));
  }
  return cantidad;
};

const leerNombres = (cantidad) => {
  let nombres = [];
  for (let i = 0; i < cantidad; i++) {
    nombres.push(prompt("Persona " + (i + 1) + ":"));
  }
  return nombres;
};

const leerPosiciones = (mensaje) => {
  let k = Number(prompt(mensaje));
  while (isNaN(k) || k < 0 || k !== Math.floor(k)) {
    k = Number(prompt(mensaje + " (debe ser un entero mayor o igual a 0)"));
  }
  return k;
};

const rotarDerecha = (lista, k) => {
  let rotada = [];
  for (let i = 0; i < lista.length; i++) {
    rotada.push(null);
  }
  for (let i = 0; i < lista.length; i++) {
    let nuevaPosicion = (i + k) % lista.length;
    rotada[nuevaPosicion] = lista[i];
  }
  return rotada;
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

let cantidad = leerCantidad("¿Cuántas personas?");
let fila = leerNombres(cantidad);
let k = leerPosiciones("¿Cuántas posiciones rotar?");

console.log("Fila original: " + unirConComas(fila));
console.log("Fila rotada: " + unirConComas(rotarDerecha(fila, k)));
