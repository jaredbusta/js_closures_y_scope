/**
 * El hoisting eleva las declaraciones por lo tanto en el 
 * sigeuiente fragmento de codigo, el navegador reacomodará la declaracion de la 
 * variable a y despues le asignará el valor 2.
 * Esto lo hace al momento de compilar el codigo antes de ser interpretado por el navegador
 */

a=2;
var a;
console.log(a);



/**
 * El hoisting tambien reacomoda las funciones al inicio y sus usos despues.. por lo que permite
 * poder ejecutar una funcion antes de ser construida
 */
nameOfDog("Servil");
function nameOfDog(name){
    console.log(name)
}
