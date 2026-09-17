// Calcular el total que 10 personas deben pagar en un almacén de llantas, si el precio de cada
// llanta es de $800 si se compran menos de 5 llantas y de $700 si se compran 5 o más.

for (let i = 0; i < 10; i++) {
    let nombre = prompt("Ingrese el nombre de la persona " + (i + 1) + ": ");

    let cantidad = parseInt(prompt("Ingrese la cantidad de llantas que desea comprar: "));

    let precio = 0;

    if (cantidad < 5) {
        precio = 800;
    } else {
        precio = 700;
    }

    let total = cantidad * precio;



    console.log("La persona " + (nombre) + " debe pagar: $" + total);
}