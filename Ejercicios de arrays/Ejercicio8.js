// Ejercicio 8. Ventas sobre el promedio
// Enunciado:
// Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué
// días estuvieron por encima del promedio y cuántos fueron.

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const leerVentas = (dias) => {
  let ventas = [];
  for (let i = 0; i < dias.length; i++) {
    ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
  }
  return ventas;
};

const calcularPromedio = (numeros) => {
  if (numeros.length === 0) {
    return 0;
  }
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
  }
  return suma / numeros.length;
};

const contarMayoresQue = (numeros, limite) => {
  let cantidad = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > limite) {
      cantidad = cantidad + 1;
    }
  }
  return cantidad;
};

const mostrarDiasSobre = (dias, ventas, limite) => {
  for (let i = 0; i < dias.length; i++) {
    if (ventas[i] > limite) {
      console.log(dias[i] + ": $" + ventas[i]);
    }
  }
};

let ventas = leerVentas(dias);

let promedio = Math.round(calcularPromedio(ventas));

console.log("Promedio diario: $" + promedio);
console.log("Días por encima del promedio:");
mostrarDiasSobre(dias, ventas, promedio);
console.log("Total: " + contarMayoresQue(ventas, promedio) + " días");
