var hello = "Hello";

let world = "Hello World";
const helloWorld = "Hello World!";
// con let y const no es posible asignar un nuevo valor a la variable

// solo var puede ser reasignada


const anotherFunction = ()=>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

const moreFunction=()=>{
    otraVariable ="Otra variable";
    nueva="nueva";
}
anotherFunction();

moreFunction();
// las variables locales solo pueden ser accedidas dentro del bloque de codigo donde fueron declaradas
console.log(otraVariable);
console.log(nueva);



