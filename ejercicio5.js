// En una escuela la matrícula de los 38 alumnos se determina según el número de materias
// que cursan. El costo de todas las materias es el mismo. Además, se ha establecido un
// programa para estimular a los alumnos, el cual consiste en lo siguiente: si el promedio
// obtenido por un alumno en el último periodo es mayor o igual que 9, se le hará un descuento
// del 30% sobre la matrícula y no se le cobrara IVA; si el promedio obtenido es menor que 9
// deberá pagar la matrícula completa, la cual incluye el 10% de IVA. Obtener cuanto debe
// pagar cada alumno.



for (let i = 1; i <= 38; i++) {
    let nombre = prompt("Ingrese el nombre del alumno: ");
    let promedio = parseFloat(prompt("Ingrese el promedio del alumno: "));
    let matricula = parseFloat(prompt("Ingrese el costo de la matrícula: "));
    let total;
    if (promedio >= 9) {
        total = matricula - (matricula * 0.30);
    } else {
        total = matricula + (matricula * 0.10);
    }

    console.log("El alumno " + nombre + " debe pagar: $" + total);
}