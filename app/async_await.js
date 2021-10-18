//* Exercici 1
//Donats els objectes Employees i Salaries, 
//creu una arrow function getEmpleado que retorni una Promise 
//efectuant la cerca en l'objecte pel seu id. 
//Creu una altra arrow function getSalario que rebi com a paràmetre 
//un objecte Employee i retorni el seu salari.




let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


function validIndex(id_Objeto){

    const isNumber = typeof id_Objeto === 'number'; 
    const isPositive = id_Objeto>0 ;
    const isInRange= id_Objeto <= employees.length;

    return isNumber &&isPositive && isInRange;
}

const getEmpleado = async(id_Objeto) => {

    const _validIndex = validIndex(id_Objeto);
    if (_validIndex){
        const elegido = employees.findIndex(empleado => empleado.id === id_Objeto);
        //console.log(`Se ha encontrado al empleado ${employees[elegido].name}`)  
        return(employees[elegido]);
    } else {
        //console.log(`No existe el empleado con ID:${id_Objeto}`);
        return false;
    }

}

const getSalario = async (Objeto_Employee) => {

    const elegido2 = salaries.findIndex(salario => salario.id === Objeto_Employee.id); 
        if (typeof salaries[elegido2] != 'undefined') {  
            //console.log(`Se ha obtenido el salario de ${Objeto_Employee.name}`);
            return(salaries[elegido2]);      
        } else {
            return false;        
        }       
}


//Nivell 2
//- Exercici 1
//Creu una funció asíncrona que anomeni a una altra que retorni
// una Promise que efectuï la seva resolve amb una demora de 2 segons.

const promiseNivell2 = (ParamDecision) => {
    return new Promise ((res, err) => {     
        if (ParamDecision != 1){
            return err("Hay un error")
        } else {
            setTimeout(() => {
                res('Correcto');
            }, 2000); 
        }
    })
}


module.exports = {validIndex, getEmpleado, getSalario, promiseNivell2};
