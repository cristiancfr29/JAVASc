// Una empresa necesita calcular el salario semanal de N obreros. Leer N y luego las horas
// trabajadas de cada obrero.
// Si el obrero trabaja 40 horas o menos, se le paga $12.000 por hora. Si trabaja más de 40, se le
// pagan $12.000 por cada una de las primeras 40 horas y $15.000 por cada hora extra. Mostrar
// el salario de cada obrero y el total de la nómina.
let n = parseInt(prompt("¿Cuántos obreros hay?"));
let nomina = 0;

for (let i = 1; i <= n; i++) {

    let horas = parseInt(prompt("Horas trabajadas del obrero " + i));
    let salario;

    if (horas <= 40) {
        salario = horas * 12000;
    } else {
        salario = (40 * 12000) + ((horas - 40) * 15000);
    }

    console.log("Salario del obrero " + i + ": $" + salario);
    nomina = nomina + salario;
}

console.log("Total de la nómina: $" + nomina);