// Al cerrar un expendio de naranjas, 15 clientes que no han pagado reciben un 15% de
// descuento si compraron más de 10 kilos. Leer primero el precio por kilo y luego los kilos de
// cada cliente.
// Mostrar cuánto paga cada cliente, el total que recibe la tienda y cuántos clientes obtuvieron
// descuento.

let precio = parseInt(prompt("precio por kilo de naranjas:"));
let total = 0;
let descuentos = 0;

for (let i = 1; i <= 15; i++) {

    let kilos = parseInt(prompt("kilos comprados por el cliente " + i));
    let pago = kilos * precio;

    if (kilos > 10) {
        pago = pago * 0.85;
        descuentos++;
    }

    console.log("el cliente " + i + " debe pagar: $" + pago);
    total = total + pago;
}

console.log("total que recibe la tienda: $" + total);
console.log("clientes con descuento: " + descuentos);