// Cinco miembros de un club quieren saber cuánto subieron o bajaron de peso desde la última
// reunión. Por cada miembro se lee su peso anterior y luego se pesa en 10 básculas distintas
// para obtener un promedio.
// Si el promedio es mayor que el peso anterior, imprimir "SUBIÓ" y los kilos. Si es menor,
// imprimir "BAJÓ" y los kilos. Si es igual, imprimir "SE MANTUVO". Los kilos siempre se
// muestran en positivo, sin usar Math.abs.

function leerPromedioBasculas(cantidadBasculas) {
    let sumaPesos = 0;
    for (let j = 1; j <= cantidadBasculas; j++) {
        let pesoBascula = parseFloat(prompt("Báscula " + j + ":"));
        sumaPesos = sumaPesos + pesoBascula;
    }
    return sumaPesos / cantidadBasculas;
}

function obtenerValorAbsoluto(numero) {
    if (numero < 0) {
        return -numero;
    } else {
        return numero;
    }
}

function generarLetrero(diferencia) {
    if (diferencia > 0) {
        return "SUBIÓ";
    } else if (diferencia < 0) {
        return "BAJÓ";
    } else {
        return "SE MANTUVO";
    }
}

for (let i = 1; i <= 5; i++) {
    console.log("Miembro " + i);
    let pesoAnterior = parseFloat(prompt("Peso anterior:"));
    let promedioActual = leerPromedioBasculas(10);
    
    let diferencia = promedioActual - pesoAnterior;
    let resultado = generarLetrero(diferencia);
    
    if (resultado === "SE MANTUVO") {
        console.log("SE MANTUVO");
    } else {
        let kilosAbsolutos = obtenerValorAbsoluto(diferencia);
        console.log(resultado + " " + kilosAbsolutos + " kg");
    }
}