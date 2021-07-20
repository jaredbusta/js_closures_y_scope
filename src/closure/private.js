// person es una variable privada y para obtener o setear su valor
// se crea un closure que retorna dos funciones ( get y set )
const person =()=>{
    var saveName ="";
    return {
        getName:()=>{
            return saveName
        },
        setName:(name)=>{
            saveName =name;
        },
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Jared");
console.log(newPerson.getName());
