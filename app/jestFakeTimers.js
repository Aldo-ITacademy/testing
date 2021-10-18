//* Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers
//Nivell 2
//- Exercici 1
//Creu una funció asíncrona que anomeni a una altra que retorni
// una Promise que efectuï la seva resolve amb una demora de 2 segons.

const promiseFakeTimer = (ParamDecision) => {
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



module.exports = {promiseFakeTimer};
