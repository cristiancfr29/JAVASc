// Un cajero registra los precios de los artículos de cada cliente. Un precio de 0 cierra la cuenta de
// ese cliente y se muestra su total. Después se pregunta si hay otro cliente (S/N).
// Al final del día mostrar: cuántos clientes se atendieron, el total cobrado y cuál cliente hizo la
// compra más alta (número de cliente y monto).

function atenderCliente(numeroCliente) {
    let totalCliente = 0;
    let precio = parseFloat(prompt("Precio (0 para cerrar la cuenta):"));

    while (precio !== 0) {
        totalCliente = totalCliente + precio;
        precio = parseFloat(prompt("Precio (0 para cerrar la cuenta):"));
    }

    return totalCliente;
}

function hayOtroCliente() {
    let respuesta = prompt("¿Hay otro cliente? (S/N):");
    if (respuesta === "S" || respuesta === "s") {
        return true;
    } else {
        return false;
    }
}

let clientesAtendidos = 0;
let totalCobrado = 0;
let compraMasAlta = 0;
let clienteCompraMasAlta = 0;

let continuar = true;

while (continuar) {
    clientesAtendidos = clientesAtendidos + 1;
    console.log("Cliente " + clientesAtendidos);

    let totalCliente = atenderCliente(clientesAtendidos);
    console.log("Total cliente " + clientesAtendidos + ": " + totalCliente);

    totalCobrado = totalCobrado + totalCliente;

    if (clientesAtendidos === 1) {
        compraMasAlta = totalCliente;
        clienteCompraMasAlta = 1;
    } else if (totalCliente > compraMasAlta) {
        compraMasAlta = totalCliente;
        clienteCompraMasAlta = clientesAtendidos;
    }

    continuar = hayOtroCliente();
}

console.log("Clientes atendidos: " + clientesAtendidos);
console.log("Total cobrado: " + totalCobrado);
console.log("Compra más alta: cliente " + clienteCompraMasAlta + " con " + compraMasAlta);