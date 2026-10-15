// Ejercicio 4. La semana de ventas
// Enunciado:
// Un local de empanadas registra sus ventas diarias. El programa arranca con este array fijo:
// let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
// Pedir la venta de cada día usando el nombre del día en el mensaje, guardarlas en otro array y
// mostrar un reporte día por día con el total de la semana.
let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const leerVentas = (dias) => {
  let ventas = [];
  for (let i = 0; i < dias.length; i++) {
    ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
  }
  return ventas;
};

const calcularTotal = (numeros) => {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  return total;
};

const mostrarReporte = (dias, ventas) => {
  for (let i = 0; i < dias.length; i++) {
    console.log(dias[i] + ": $" + ventas[i]);
  }
  console.log("Total semana: $" + calcularTotal(ventas));
};

let ventas = leerVentas(dias);
mostrarReporte(dias, ventas);
