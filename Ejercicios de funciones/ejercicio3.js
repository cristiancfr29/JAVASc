// Leer cuántos días se van a registrar. Luego leer la temperatura en grados centígrados de cada
// día y mostrar su equivalente en Kelvin y en Fahrenheit. Al final, mostrar la temperatura
// promedio en °C.

let dias = parseInt(prompt("cuántos días?:"));
let sumaTemperaturas = 0;

for (let i = 1; i <= dias; i++) {
    let celsius = parseFloat(prompt(`Temperatura día ${i} (°C):`));
    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9 / 5) + 32;
    
    sumaTemperaturas += celsius;
    
    console.log(`Día ${i}: ${celsius} °C = ${kelvin} K = ${fahrenheit} °F`);
}

let promedio = sumaTemperaturas / dias;
console.log(`Promedio: ${promedio} °C`);