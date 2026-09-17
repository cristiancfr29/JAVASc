// Una institución educativa estableció un programa para estimular a los alumnos con buen
// rendimiento académico y que consiste en la siguiente tabla:
//  Si el promedio es de 9.5 o más y el alumno es de preparatoria, entonces este podrá
// cursar 55 unidades y se le hará un 25% de descuento.
//  Si el promedio es mayor o igual a 9 pero menor que 9.5 y el alumno es de
// preparatoria, entonces este podrá cursar 50 unidades y se le hará un 10% de
// descuento.
//  Si el promedio es mayor que 7 y menor que 9 y el alumno es de preparatoria, este
// podrá cursar 50 unidades y no tendrá ningún descuento.
//  Si el promedio es de 7 o menor, el número de materias reprobadas es de 0 a 3 y el
// alumno es de preparatoria, entonces podrá cursar 45 unidades y no tendrá
// descuento.
//  Si el promedio es de 7 o menor, el número de materias reprobadas es de 4 o más y
// el alumno es de preparatoria, entonces podrá cursar 40 unidades y no tendrá ningún
// descuento.
//  Si el promedio es mayor o igual a 9.5 y el alumno es de profesional, entonces podrá
// cursar 55 unidades y se le hará un 20% de descuento.
//  Si el promedio es menor de 9.5 y el alumno es de profesional, entonces podrá cursar
// 55unidades y no tendrá descuento
// Obtener el total que tendrá que pagar un alumno si la matrícula para alumnos de profesional
// es de $80.000 por cada cinco unidades y para alumnos de preparatoria es de $50.000 por
// cada cinco unidades.

let promedio;
let precio;
let descuento;
let unidades;
let tipoAlum;
let perdidas;
const n = parseInt(prompt("Ingrese el numero de estudiantes: "));
for(let i = 1; i<=n; i++){
    promedio = parseFloat(prompt("Ingrese el promedio del estudiante: "));
    tipoAlum = prompt("Ingrese el tipo de alumno (preparatoria/profesional): ");
    unidades = parseInt(prompt("Ingrese el numero de unidades que desea cursar: "));
    perdidas = parseInt(prompt("Ingrese el numero de materias perdidas"));

    if((tipoAlum == "preparatoria" || tipoAlum == "Preparatoria") && promedio >= 9.5){
        if(unidades <= 55){
            precio = (unidades * 50000) / 5;
            descuento = precio - (precio * 0.25);
        }else {
            console.warn("El numero de unidades excede el limite permitido");
        }
    }
    else if((tipoAlum == "preparatoria" || tipoAlum == "Preparatoria") && (promedio >= 9 && promedio < 9.5)){
        if(unidades <= 50){
            precio = (unidades * 50000) / 5;
            descuento = precio - (precio * 0.1);
        }else{
            console.warn("El numero de unidades excede el limite permitido");
        }
    }
    else if((tipoAlum == "Preparatoria" || tipoAlum == "Preparatoria") && (promedio>7 && promedio<9)){
        if(unidades <= 50){
            precio = (unidades * 50000) / 5;
            descuento = 0;
        }else{
            console.warn("El numero de unidades excede el limite permitido");
        }
    }
    else if((tipoAlum == "preparatoria" || tipoAlum == "Preparatoria") && promedio<7 && perdidas <=3 ){
        if(unidades<=45){
            precio = (unidades * 50000) / 5;
            descuento = 0;
        }else{
            console.warn("El numero de unidades excede el limite permitido");
        }
    }
    else if((tipoAlum == "preparatoria" || tipoAlum == "Preparatoria") && promedio<7 && perdidas >=4 ){
        if(unidades<=40){
            precio = (unidades * 50000) / 5;
            descuento = 0;
        }else{
            console.warn("El numero de unidades excede el limite permitido");
        }
    }
    else if((tipoAlum="profesional" || tipoAlum == "Profesional") && promedio>=9.5){
        if(unidades<=55){
            precio = (unidades * 80000) / 5;
            descuento = precio - (precio * 0.2);
        }else{
            console.warn("El numero de unidades excede el limite permitido");
        }
    }
    else if((tipoAlum == "profesional" || tipoAlum == "Profesional") && promedio<9.4){
        if(unidades<=55){
            precio = (unidades * 80000) / 5;
            descuento = 0;
        }else{
            console.warn("El numero de unidades excede el limite");
        }
    }else{
        console.warn(`El alumno ${i} no cumple con ninguna condición`);
        continue;
    }

    console.log(`El alumo ${i} tendra que pagar: `);
    if(descuento>0){
        console.log(`$${descuento}`);
    }else{
        console.log(`$${precio}`);
    }
}