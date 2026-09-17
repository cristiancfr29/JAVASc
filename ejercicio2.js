// En un supermercado se hace una promoción, mediante la cual los clientes obtienen un
// descuento dependiendo de un número que se escoge al azar. Si el numero escogido es
// menor que 74 el descuento es del 15% sobre el total de la compra, si es mayor o igual a 74
// el descuento es del 20%. Obtener cuánto dinero se le descuenta. Hacer el ciclo mientras el
// número escogido sea diferente de 0.


while (numero != 0) {
    let nombre = prompt("Nombre del cliente");
    let numero = parseInt(prompt("Ingrese el número escogido: "));
    let totalCompra = parseFloat(prompt("Ingrese el total de la compra: "));
    let descuento;

    if (numero < 74) {
        descuento = totalCompra * 0.15;
    } else {
        descuento = totalCompra * 0.20;
    }

    console.log("El descuento de " + nombre + " es de: $" + descuento);

    numero = parseInt(prompt("Ingrese otro número (0 para terminar): "));
}