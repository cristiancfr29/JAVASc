// Ejercicio 3. Primero, último y del medio
// Enunciado:
// Leer N números (N lo da el usuario y debe ser al menos 1). Mostrar el primero, el último y el
// del medio. Si N es par hay dos del medio: mostrar ambos.
const leerCantidad = (mensaje) => {
  let cantidad = Number(prompt(mensaje));
  while (isNaN(cantidad) || cantidad < 1 || cantidad !== Math.floor(cantidad)) {
    cantidad = Number(prompt(mensaje + " (debe ser un entero mayor o igual a 1)"));
  }
  return cantidad;
};

const leerNumeros = (cantidad) => {
  let numeros = [];
  for (let i = 0; i < cantidad; i++) {
    numeros.push(Number(prompt("Número " + (i + 1) + ":")));
  }
  return numeros;
};

const obtenerUltimo = (numeros) => {
  return numeros[numeros.length - 1];
};

const mostrarMedio = (numeros) => {
  let tamano = numeros.length;
  if (tamano % 2 === 1) {
    let indice = Math.floor(tamano / 2);
    console.log("Del medio: " + numeros[indice]);
  } else {
    let indiceDerecho = tamano / 2;
    let indiceIzquierdo = indiceDerecho - 1;
    console.log("Del medio: " + numeros[indiceIzquierdo] + " y " + numeros[indiceDerecho]);
  }
};

let cantidad = leerCantidad("¿Cuántos números?");
let numeros = leerNumeros(cantidad);

console.log("Primero: " + numeros[0]);
console.log("Último: " + obtenerUltimo(numeros));
mostrarMedio(numeros);
