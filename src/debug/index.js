/**
 * La palabra reservada `debugger` genera un punto de interrupcion en el navegador 
 * en la consola del navegador se puede visualizar el scope de las variables de la funcion 
 * asi como su valor.
 * 
 * 
 */

var a ="Hello";

function hello(){
    let b="Hello world";
    const c="Hello world!";
    if(true){
        let d ="Hello world !!";
        debugger
    }
}
hello();

/**
 * Ejemplo para debuggear la funcion moneyBox
 * @returns 
 */
const moneyBox2=()=>{
    debugger
    var saveCons=0;
    // nueva funcion scope que le dará vida al closure
    const countCoins=(coins)=>{
        debugger
        saveCons += coins;
        console.log(`MoneyBox2 $${saveCons}`);
    }
    return countCoins; // regresa la funcion interna
}

let myMoneyBox = moneyBox2();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);