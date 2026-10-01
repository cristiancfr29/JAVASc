// Leer 20 números e imprimir cuántos son positivos, cuántos negativos y cuántos son cero.for
let positivos = 0;
let negativos = 0;
let ceros = 0;     

for (let i = 1; i <= 20; i++) {
    const numero = parseFloat(prompt(`Ingrese el número ${i}:`));
    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    } else {
        ceros++;
    }
}
console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Ceros: ${ceros}`)