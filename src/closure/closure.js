// ###### closure es la combinacion de una funcion y el ambito lexico donde ha sido declarada dicha funcion

console.group("moneyBox no closure");
// ejemplo con alcancia
// funcion para mostrar lo que se va agregando a la alcancia
const moneyBox =(coins)=>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox $${saveCoins}`);
}
moneyBox(5);
moneyBox(5);
moneyBox(10);
// EN ese ejemplo, la funcion moneyBox no acumula ni "recuerda" las monedas que se han agregado a la alcancía
console.groupEnd();



console.group("MoneyBox Closure");
// closure funcional 
const moneyBox2=()=>{
    var saveCons=0;
    // nueva funcion scope que le dará vida al closure
    const countCoins=(coins)=>{
        saveCons += coins;
        console.log(`MoneyBox2 $${saveCons}`);
    }
    return countCoins; // regresa la funcion interna
}

let myMoneyBox = moneyBox2();
myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
console.groupEnd();