
// Ejercicio 10. Pares e impares
// Enunciado:
// Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los
// impares, en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío,
// mostrar "(ninguno)".

const CANTIDAD_NUMEROS = 8;

const mostrarNumeroInvalido = () => {
  console.log("Número inválido, debe ser un entero");
};

const leerEnteroValido = (numero) => {
  let valor = Number(prompt("Número " + numero + ":"));
  while (isNaN(valor) || valor !== Math.floor(valor)) {
    mostrarNumeroInvalido();
    valor = Number(prompt("Número " + numero + ":"));
  }
  return valor;
};

const leerEnteros = (cantidad) => {
  let numeros = [];
  for (let i = 0; i < cantidad; i++) {
    numeros.push(leerEnteroValido(i + 1));
  }
  return numeros;
};

const esPar = (numero) => {
  return numero % 2 === 0;
};

const filtrarPares = (numeros) => {
  let pares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (esPar(numeros[i])) {
      pares.push(numeros[i]);
    }
  }
  return pares;
};

const filtrarImpares = (numeros) => {
  let impares = [];
  for (let i = 0; i < numeros.length; i++) {
    if (!esPar(numeros[i])) {
      impares.push(numeros[i]);
    }
  }
  return impares;
};

const unirConComas = (lista) => {
  let texto = "";
  for (let i = 0; i < lista.length; i++) {
    texto = texto + lista[i];
    if (i < lista.length - 1) {
      texto = texto + ", ";
    }
  }
  return texto;
};

const mostrarGrupo = (titulo, lista) => {
  let contenido = unirConComas(lista);
  if (lista.length === 0) {
    contenido = "(ninguno)";
  }
  console.log(titulo + " (" + lista.length + "): " + contenido);
};

let numeros = leerEnteros(CANTIDAD_NUMEROS);
mostrarGrupo("Pares", filtrarPares(numeros));
mostrarGrupo("Impares", filtrarImpares(numeros));
