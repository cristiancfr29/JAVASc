// En un grupo de N aprendices se lee, uno por uno, el género (H o M) y la edad. Mostrar cuántos
// hombres y cuántas mujeres hay, el promedio de edad de los hombres, el de las mujeres y el de
// todo el grupo.
// Si no hay hombres o no hay mujeres, mostrar un mensaje en lugar de calcular ese promedio.

function esHombre(genero) {
    if (genero === "H" || genero === "h") {
        return true;
    } else {
        return false;
    }
}

function calcularPromedio(suma, cantidad) {
    return suma / cantidad;
}

let cantidadPersonas = parseInt(prompt("¿Cuántas personas?:"));

let contadorHombres = 0;
let sumaEdadHombres = 0;

let contadorMujeres = 0;
let sumaEdadMujeres = 0;

let sumaEdadTotal = 0;

for (let i = 1; i <= cantidadPersonas; i++) {
    let genero = prompt("Género persona " + i + " (H/M):");
    let edad = parseInt(prompt("Edad persona " + i + ":"));

    sumaEdadTotal = sumaEdadTotal + edad;

    if (esHombre(genero)) {
        contadorHombres = contadorHombres + 1;
        sumaEdadHombres = sumaEdadHombres + edad;
    } else {
        contadorMujeres = contadorMujeres + 1;
        sumaEdadMujeres = sumaEdadMujeres + edad;
    }
}

if (contadorHombres > 0) {
    let promedioHombres = calcularPromedio(sumaEdadHombres, contadorHombres);
    console.log("Hombres: " + contadorHombres + " | Promedio de edad: " + promedioHombres);
} else {
    console.log("Hombres: 0 | No hay hombres registrados para calcular promedio");
}

if (contadorMujeres > 0) {
    let promedioMujeres = calcularPromedio(sumaEdadMujeres, contadorMujeres);
    console.log("Mujeres: " + contadorMujeres + " | Promedio de edad: " + promedioMujeres);
} else {
    console.log("Mujeres: 0 | No hay mujeres registradas para calcular promedio");
}

if (cantidadPersonas > 0) {
    let promedioGrupo = calcularPromedio(sumaEdadTotal, cantidadPersonas);
    console.log("Promedio del grupo: " + promedioGrupo);
}