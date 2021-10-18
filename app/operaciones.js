// *Nivell 1
// Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

 /*--------------------------------------------------------------------------*/
 //*SUMAR
const sumar = (...numbers ) => {


    const tieneSumandos = numbers.length>0; //evitar undefined o null
    const sonNumeros = numbers.every(number => typeof number === 'number'); //typeof igual a numeros
    let suma = 0; //iniciar suma

    if (tieneSumandos && sonNumeros){
        numbers.forEach((number) =>{suma += number;});
    } else if (sonNumeros === false) {
        suma = 'not valid'
    } 

    return suma;
 }


 /*--------------------------------------------------------------------------*/
 //*RESTAR
 function restar(...numbers) {

    //Iniciar diferencia
    let diferencia = 0;

    //Comprobar que todos elementos son del tipo numeros
    const sonNumeros = numbers.every(number => typeof number === 'number'); //typeof igual a numeros

    if (sonNumeros){
        switch (numbers.length) {
            case 0:
                diferencia = 0;
                //console.log('La operacion no tiene elementos');
                break;
            case 1:
                diferencia = numbers[0];
                break;

            default:
                diferencia = numbers[0];
                for(let i=1; i<numbers.length; i++){
                    diferencia -= numbers[i];
                }
                break;
        }
    } else {
        diferencia = 'not valid';
    }
    return diferencia;
}

 /*--------------------------------------------------------------------------*/
 //*MULTIPLICAR
function multiplicar( ...numbers) {
    
    const sonNumeros = numbers.every(number => typeof number === 'number'); //typeof igual a numeros

    if (sonNumeros === false || numbers.length === 0){
        return producto ='not valid';
    }

    if (sonNumeros){
        switch (numbers.length) {
            case 1:
                producto = 1;
                //console.log('Se necesita de dos factores para calcular el producto');
                producto *= numbers[0];
                break;
    
            default:
                producto = numbers[0];
                for(let i=1; i<numbers.length; i++){
                producto *= numbers[i];
                }
                break;
        }
        
    } 
    return producto;
    
}

 /*--------------------------------------------------------------------------*/
 //*DIVIDIR
function validDivision( dividendo, ...divisores) {
    
    const sonNumeros = divisores.every(number => typeof number === 'number') && typeof dividendo === 'number' ; //typeof igual a numeros
    const divisorNoCero = divisores.every(number => number != 0); //typeof igual a numeros
    const hayDivisor = divisores.length > 0;

    return sonNumeros && divisorNoCero && hayDivisor;

}

function dividir(dividendo, ...divisores){
    
    const _validDivision= validDivision(dividendo, ...divisores);

    if (_validDivision) {
        let cociente = dividendo;
        for(let i=0; i<divisores.length; i++){
            cociente /= divisores[i];
        }
    return cociente;
    }
}


module.exports = {sumar, restar, multiplicar, validDivision};