// Un listado de personas recibe una cantidad de dólares. Por cada persona mostrar el
// equivalente en pesos, sabiendo que el dólar cuesta $3.550. El listado termina cuando se
// ingresa 0.
// Al final, mostrar cuántas personas se atendieron y el total en pesos. El 0 no cuenta como
// persona.

function convertirDolaresAPesos(dolares) {
    return dolares * 3550;
}

function procesarListado() {
    let personas = 0;
    let totalPesos = 0;

    let dolares = parseFloat(prompt("Dólares (0 para terminar):"));

    while (dolares !== 0) {
        let pesos = convertirDolaresAPesos(dolares);
        console.log("Equivale a: " + pesos + " pesos");

        personas = personas + 1;
        totalPesos = totalPesos + pesos;

        dolares = parseFloat(prompt("Dólares (0 para terminar):"));
    }

    console.log("Personas atendidas: " + personas);
    console.log("Total en pesos: " + totalPesos);
}

procesarListado();