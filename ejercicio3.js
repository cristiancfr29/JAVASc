// Calcular el número de pulsaciones que deben tener N personas por cada 10 segundos de
// ejercicio aeróbico; la fórmula que se aplica cuando el sexo es femenino es:
// num.pulsaciones = (220 - edad)/10,
// Y si el sexo es masculino:
// num. pulsaciones = (210 - edad)/10

while (edad != 0) {
    let nombre = prompt("Ingrese el nombre de la persona: ");
    let sexo = prompt("Ingrese el sexo de la persona (M/F): ");
    let edad = parseInt(prompt("Ingrese la edad de la persona: "));

    let pulsaciones;
    if (sexo === "F") {
        pulsaciones = (220 - edad) / 10;
    } else {
        pulsaciones = (210 - edad) / 10;
    }
    console.log("El número de pulsaciones de " + nombre + " es: " + pulsaciones);
    nombre = prompt("Ingrese el nombre de la persona: ");
    sexo = prompt("Ingrese el sexo de la persona (M/F): ");
    edad = parseInt(prompt("Ingrese la edad de la persona: "));
    parseInt(prompt("para finalizar ingrese 0 en la edad: "));
}