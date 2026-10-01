// Leer las calificaciones de un grupo (escala de 0.0 a 5.0) sin saber cuántas son. La lectura
// termina cuando se ingresa -1.
// Si una nota está fuera del rango, mostrar "Nota inválida" y no tenerla en cuenta. Al final
// mostrar: cantidad de notas válidas, promedio, nota más baja y cuántos aprobaron (nota mayor
// o igual a 3.0).

function esNotaValida(nota) {
    if (nota >= 0 && nota <= 5) {
        return true;
    } else {
        return false;
    }
}

function estaAprobado(nota) {
    if (nota >= 3.0) {
        return true;
    } else {
        return false;
    }
}

let cantidadValidas = 0;
let sumaNotas = 0;
let notaMasBaja = 0;
let aprobados = 0;

let nota = parseFloat(prompt("Nota (-1 para terminar):"));

while (nota !== -1) {
    if (esNotaValida(nota)) {
        if (cantidadValidas === 0) {
            notaMasBaja = nota;
        } else if (nota < notaMasBaja) {
            notaMasBaja = nota;
        }

        cantidadValidas = cantidadValidas + 1;
        sumaNotas = sumaNotas + nota;

        if (estaAprobado(nota)) {
            aprobados = aprobados + 1;
        }
    } else {
        console.log("Nota inválida, debe estar entre 0 y 5");
    }

    nota = parseFloat(prompt("Nota (-1 para terminar):"));
}

if (cantidadValidas > 0) {
    let promedio = sumaNotas / cantidadValidas;
    console.log("Notas válidas: " + cantidadValidas);
    console.log("Promedio: " + promedio);
    console.log("Nota más baja: " + notaMasBaja);
    console.log("Aprobados: " + aprobados);
} else {
    console.log("No se ingresaron notas válidas.");
}