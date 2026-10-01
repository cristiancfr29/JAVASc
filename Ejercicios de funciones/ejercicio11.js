// El programa genera un número secreto entre 1 y 100. El usuario tiene máximo 7 intentos para
// adivinarlo. Después de cada intento, el programa dice si el número secreto es mayor o menor.
// El juego termina cuando el usuario adivina o se le acaban los intentos. Si adivina, mostrar en
// cuántos intentos lo logró. Si pierde, mostrar cuál era el número.

function generarNumeroSecreto(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function evaluarIntento(intento, secreto) {
    if (intento < secreto) {
        return "mayor";
    } else if (intento > secreto) {
        return "menor";
    } else {
        return "correcto";
    }
}

let numeroSecreto = generarNumeroSecreto(1, 100);
let intentos = 0;
let maxIntentos = 7;
let adivino = false;

while (intentos < maxIntentos && adivino === false) {
    intentos = intentos + 1;
    let intentoUsuario = parseInt(prompt("Intento " + intentos + ":"));
    let resultado = evaluarIntento(intentoUsuario, numeroSecreto);

    if (resultado === "correcto") {
        adivino = true;
        console.log("¡Adivinaste en " + intentos + " intentos!");
    } else if (resultado === "mayor") {
        console.log("El número secreto es mayor");
    } else {
        console.log("El número secreto es menor");
    }
}

if (adivino === false) {
    console.log("Agotaste tus intentos. El número secreto era " + numeroSecreto);
}