const n = parseInt(prompt("Ingrese la cantidad de ternas que quiere digitar: "));
let num1;
let num2;
let num3;
let medio;

for(let i=1; i<=n; i++){
    num1 = parseInt(prompt(`Ingrese el numero 1 de la terna ${i}: `));
    num2 = parseInt(prompt(`Ingrese el numero 2 de la terna ${i}: `));
    num3 = parseInt(prompt(`Ingrese el numero 3 de la terna ${i}: `));
    if((num1>num2 && num1<num3) || (num1<num2 && num1>num3)){
        medio = num1;
    }
    else if((num2>num1 && num2<num3) || (num2<num1 && num2>num3)){
        medio = num2;
    }
    else if((num3>num1 && num3<num2) || (num3<num1 && num3>num2)){
        medio = num3;
    }else{
        console.log(`No hay numero medio en la terna ${i}`);
    }

    if(medio != null){
        console.log(`El numero medio es ${medio}`);
    }
}