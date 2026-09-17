// Desarrolle un algoritmo que lea el valor del pasaje y el número de pasajeros que abordarán
// varios microbuses. Calcular el valor total a pagar por cada uno.

let pago;
let n;
let precio;
const cantBus = parseInt(prompt("Ingrese la cantidad de microbuses de salida: "))


for(let i = 1; 1<=cantBus; i++){
    precio = parseInt(prompt("Ingrese el valor del pasaje: "));
    n = parseInt(prompt("Ingrese la cantidad de pasajeros que van a viajar: "));
    pago = precio * n;
    console.log(`El valor total a pagar del microbus ${i} es de: $${pago}`);
}