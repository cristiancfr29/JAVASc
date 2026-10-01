// Una persona invierte su dinero en un banco que paga 2% de interés mensual. La ganancia de
// cada mes se reinvierte. Leer el capital inicial y la cantidad de meses. Mostrar el saldo al final de
// cada mes y la ganancia total.

let capital = 0;
let inversion = 0;
let meses = 0;
let total = 0;

const inversion1 = (num) =>{
    return ( num + (num * 0.02))
}

const inversion2 = (num1) =>{
    return num1 * 0.02
}

capital = parseFloat(prompt(`Ingrese el capital inicial a invertir: `));
meses = parseInt(prompt(`Ingrese la cantidad de meses a invertir: `));

for(let i=1; i<=meses; i++){
    inversion = inversion + inversion2(capital);
    capital = inversion1(capital);
    console.log(`Dinero mes ${i}: $${capital}`);
}

console.log(`La ganancia total es de: ${inversion}`);
