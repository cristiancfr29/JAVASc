// Leer un número y mostrar su tabla de multiplicar del 1 al 10. Cada línea debe mostrar el
// multiplicando, el multiplicador y el producto.

const TablaDeMultiplicar = (num1, num2) => {
    return num1 * num2;
}

const numero = parseInt(prompt("Ingrese el número: "));

for (let i = 1; i <= 10; i++) {
    const respuesta = TablaDeMultiplicar(numero, i);
    console.log(`${numero} * ${i} = ${respuesta}`);
}

