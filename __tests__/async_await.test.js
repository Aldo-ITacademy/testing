// * Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

const {validIndex, getEmpleado, getSalario, promiseNivell2} = require('../app/async_await');

// *TEST Async/await N1E1

test('Async/await N1E1: No acepta llamada sin argumentos' , () => {
    expect(validIndex()).toBe(false);
  });

test('Async/await N1E1: Solo acepta parametros con typeof de números' , () => {
  expect(validIndex('2')).toBe(false);
  expect(validIndex('a')).toBe(false);
  expect(validIndex(2)).toBe(true);
});

test('Async/await N1E1: Solo acepta numeros positivos' , () => {
  expect(validIndex(-1)).toBe(false);
  expect(validIndex(0)).toBe(false);
  expect(validIndex(2)).toBe(true);
});

test('Async/await N1E1: Solo acepta id con valor maximo de numero de empleados' , () => {
  expect(validIndex(4)).toBe(false);
  expect(validIndex(3)).toBe(true);
});

test('Async/await N1E1: getEmpleado promise testing', () => {
  return getEmpleado(1).then(data => {
    expect(data).toMatchObject({id: 1, name: 'Linux Torvalds'});
  });
});

test('Async/await N1E1: getEmpleado devuelve falso con id no permitido', () => {
  return getEmpleado().then(data => {
    expect(data).toBe(false);
  });
});

test('Async/await N1E1: getSalario promise testing', () => {
  return getSalario({id: 1, name: 'Linux Torvalds'}).then(data => {
    expect(data).toMatchObject({"id": 1, "salary": 4000});
  });
});

test('Async/await N1E1: getSmpleado devuelve falso con id no permitido', () => {
  return getSalario({id: 9, name: 'Pedro'}).then(data => {
    expect(data).toBe(false);
  });
});



//  Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await Nivell 2 - Exercici 1


test('Async/await N2E1: promiseNivell2 promise testing ', () => {
  return promiseNivell2(1).then(data => {
    expect(data).toBe('Correcto');
  });
});

test('Async/await N2E1: promiseNivell2 promise testing ', () => {
  return expect(promiseNivell2(0)).rejects.toMatch('Hay un error');
});