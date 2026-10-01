// Un centro de verificación quiere saber el promedio de puntos contaminantes de los primeros 25
// automóviles que lleguen. También quiere saber los puntos del auto que menos contaminó y del
// que más contaminó.

let puntos = 0;
let menos = 1000000;
let mas  = 0;
let promedio = 0;

const mayor = (num) =>{
    if(num>mas){
        return mas = num;
    }
}

const menor = (num) =>{
    if(num<menos){
        return menos = num;
    }
}

const division = (num, num2) => {
    return num / num2;
}

for(i=1 ; i<=3 ; i++){
    puntos = parseInt(prompt("Ingrese el valor de contaminacion: "));
    mayor(puntos)
    menor(puntos)
    promedio += puntos;
}

promedio = division(promedio, i)
console.log(`El promedio de los puntos es: ${promedio}`);
console.log(`El menor valor es: ${menos}`);
console.log(`El mayor valor es: ${mas}`);

