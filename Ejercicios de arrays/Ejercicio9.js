// Ejercicio 9. Al revés sin reverse
// Enunciado:
// Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden
// inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar
// que el original quedó igual.


const leerCantidad = (mensaje) => {
  let cantidad = Number(prompt(mensaje));
  while (isNaN(cantidad) || cantidad < 1 || cantidad !== Math.floor(cantidad)) {
    cantidad = Number(prompt(mensaje + " (debe ser un entero mayor o igual a 1)"));
  }
  return cantidad;
};

const leerPalabras = (cantidad) => {
  let palabras = [];
  for (let i = 0; i < cantidad; i++) {
    palabras.push(prompt("Palabra " + (i + 1) + ":"));
  }
  return palabras;
};

const invertir = (lista) => {
  let invertida = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    invertida.push(lista[i]);
  }
  return invertida;
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

let cantidad = leerCantidad("¿Cuántas palabras?");
let palabras = leerPalabras(cantidad);
let invertidas = invertir(palabras);

console.log("Original: " + unirConComas(palabras));
console.log("Invertido: " + unirConComas(invertidas));
