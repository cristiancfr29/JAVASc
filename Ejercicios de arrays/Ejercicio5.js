// Ejercicio 5. El día de mejor venta
// Enunciado:
// Copia la lectura del ejercicio 4. Mostrar el día con mayor venta, el día con menor venta y la
// diferencia entre ambos.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const leerVentas = (dias) => {
  let ventas = [];
  for (let i = 0; i < dias.length; i++) {
    ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
  }
  return ventas;
};

const buscarPosicionMayor = (numeros) => {
  if (numeros.length === 0) {
    return -1;
  }
  let posicion = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > numeros[posicion]) {
      posicion = i;
    }
  }
  return posicion;
};

const buscarPosicionMenor = (numeros) => {
  if (numeros.length === 0) {
    return -1;
  }
  let posicion = 0;
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < numeros[posicion]) {
      posicion = i;
    }
  }
  return posicion;
};

let ventas = leerVentas(dias);
let posMejor = buscarPosicionMayor(ventas);
let posPeor = buscarPosicionMenor(ventas);

console.log("Mejor día: " + dias[posMejor] + " ($" + ventas[posMejor] + ")");
console.log("Peor día: " + dias[posPeor] + " ($" + ventas[posPeor] + ")");
console.log("Diferencia: $" + (ventas[posMejor] - ventas[posPeor]));
