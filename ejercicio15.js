// Un listado de personas reciben una cantidad no conocida en dólares. Haga un algoritmo que
// determine el valor equivalente en pesos, sabiendo que el dólar tiene un costo de $3.550
// pesos. El listado termina cuando la cantidad de dólares sea igual a 0.

let n = 1;
let i = 1;
let eqv;

while(n!=0){
    n = parseFloat(prompt(`Ingrese los dolares de la persona ${i}`));
    if(n!=0){
        eqv = n * 3550;
        console.log(`Los $${n} dolares de la persona ${i} equivalen a $${eqv} pesos`);
        i++;
    }else{
        console.log("Hasta luego");
    }
}
