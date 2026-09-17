// Una compañía de seguros está abriendo un departamento de finanzas y estableció un
// programa para captar clientes, que consiste en lo siguiente: Si el monto por el que se efectúa
// la fianza es menor que $50 000 la cuota a pagar será por el 3% del monto, y si el monto es
// mayor que $50 000 la cuota a pagar será el 2% del monto. La afianzadora desea determinar
// cuál será la cuota que debe pagar cada cliente.

while (monto != 0) {
    let nombre = prompt("ingrese el nomnbre del cliente");
    let monto = parseFloat(prompt("Ingrese el monto de la fianza: "));

    let cuota;
    if (monto < 50000) {
        cuota = monto * 0.03;
    } else cuota = monto * 0.02;
    console.log("La cuota que debe pagar " + nombre + " es: $" + cuota);
    console.log("para finalizar ingrese 0 en el monto: ");
}