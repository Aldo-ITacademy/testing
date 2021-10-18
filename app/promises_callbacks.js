
const { getEmpleado, getSalario} = require('../app/async_await');

/*- Exercici 3
Invoqui la primera Promise getEmpleado i posteriorment getSalario, niant l'execució de les dues promises.*/
//let indiceLlamaEmpleado = 2;

const anidar = async (indiceLlamaEmpleado) => {
    try {
        const empleadoElegido = await getEmpleado(indiceLlamaEmpleado);
        const salarioEmpEle = await getSalario(empleadoElegido);  
        //console.log(salarioEmpEle.salary);  
        return 'exitoso';
    } catch (error) {
        //console.log(error.message);    
    }    
}

//anidar(indiceLlamaEmpleado);

module.exports = {anidar};