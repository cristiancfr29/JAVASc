// Unas fábricas han sido sometidas a un programa de control de contaminación para lo cual
// se efectúa una revisión de los puntos IMECA generados por la fábrica. El programa de control
// de contaminación consiste en medir los puntos IMECA que emite la fábrica en cinco días de
// una semana y si el promedio es superior a los 170 puntos entonces tendrá la sanción de
// parar su producción por una semana y una multa del 50% de las ganancias diarias cuando
// no se detiene la producción. Si el promedio obtenido de puntos IMECA es de 170 o menor
// entonces no tendrá ni sanción ni multa. Los dueños de las fábricas desean saber cuánto
// dinero perderá después de ser sometido a la revisión.
 let nombre = prompt("Ingrese el nombre de la fábrica: ");
for (let i = 1; i <= 5; i++) {
   
    let puntosIMECA = parseFloat(prompt("Ingrese los puntos IMECA generados por la fábrica en el día " + i + ": "));
    let gananciasDiarias = parseFloat(prompt("Ingrese las ganancias diarias de la fábrica: "));
    let totalPuntosIMECA = puntosIMECA * 5;
    let promedioPuntosIMECA = totalPuntosIMECA / 5;
    if (promedioPuntosIMECA > 170) {
        let multa = gananciasDiarias * 0.50;
        console.log("La fábrica " + nombre + " tendrá que parar su producción por una semana y pagar una multa de: $" + multa);
    } else {
        console.log("La fábrica " + nombre + " no tendrá sanción ni multa.");
    }}