// En una fábrica de computadoras se planea ofrecer a los clientes un descuento que
// dependerá del número de computadoras que compre. Si las computadoras son menos de
// cinco se les dará un 10% de descuento sobre el total de la compra; si el número de
// computadoras es mayor o igual a cinco pero menos de diez se le otorga un 20% de
// descuento; y si son 10 o más se les da un 40% de descuento. El precio de cada computadora
// es de $11,000

const precioComputadora = 11000;

let cliente = prompt("Ingrese el nombre del cliente o escriba 'salir' para terminar");

while (cliente !== "salir") {

    let cantidad = parseInt(prompt("Ingrese la cantidad de computadoras:"));

    let totalCompra = cantidad * precioComputadora;
    let descuento;

    if (cantidad < 5) {
        descuento = totalCompra * 0.10;
    } else if (cantidad < 10) {
        descuento = totalCompra * 0.20;
    } else {
        descuento = totalCompra * 0.40;
    }

    let totalPagar = totalCompra - descuento;

    console.log("El cliente " + cliente + " debe pagar: $" + totalPagar);

    cliente = prompt("Ingrese el nombre del siguiente cliente o escriba 'salir' para terminar");
}