// TODO Verifica mitjançant tests l'execució de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers

const {promiseFakeTimer} = require('../app/jestFakeTimers');

// Fake timers using Jest
beforeEach(() => {
  jest.useFakeTimers()
})


test('Async/await N2E1:Correcto promiseNivell2 promise testing, devuelve enseguida',async()=>{
//  const {promiseFakeTimer} = require('../app/jestFakeTimers');
  const data = promiseFakeTimer(1); 
  jest.advanceTimersByTime(2000);
  expect(data).resolves.toMatch('Correcto');
})

// Running all pending timers and switching to real timers using Jest
afterEach(() => {
  jest.runOnlyPendingTimers()
  jest.useRealTimers()
})

