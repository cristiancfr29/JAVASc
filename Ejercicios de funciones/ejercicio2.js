// Leer 10 números. Por cada número mostrar su cubo y su cuarta parte. Al terminar, mostrar la
// suma de todos los cubos.

const Cubo= (numero) => {
    return numero ** 3;
}

const CuParte= (numero) => {
    return numero / 4;
}

let sumaCubos = 0;

for (let i = 1; i <= 10; i++) {
    const numero = parseInt(prompt(`Ingrese el número ${i}: `));

    const cubo = Cubo(numero);
    const cuartaParte = CuParte(numero);

    console.log(`${numero} al cubo = ${cubo}`);
    console.log(`La cuarta parte de ${numero} = ${cuartaParte}`);

    sumaCubos = sumaCubos + cubo;
}

console.log(`La suma de todos los cubos es: ${sumaCubos}`);
