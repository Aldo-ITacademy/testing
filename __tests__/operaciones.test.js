const operaciones = require('../app/operaciones');

const sumar= operaciones.sumar ;
const restar=operaciones.restar;
const validDivision = operaciones.validDivision;
const multiplicar = operaciones.multiplicar;

/*------------------------------------------------------------------------------*/
//* TEST SUMAR

test('SUMA: evita null o undefined', () => {
    expect(sumar()).toBe(0);
  });

test('SUMA: Acepta un argumento', () => {
expect(sumar(1)).toBe(1);
});

test('SUMA: Si recibe strings', () => {
    expect(sumar('e', 5)).toBe('not valid');
    });

 test('SUMA: recibe 2 argumentos o mas', () =>{
    expect(sumar(1,1)).toBe(2);
    expect(sumar(1,1,1)).toBe(3);
    expect(sumar(1,1,1,1)).toBe(4);
 });

 /* ----------------------------------------------------------------------------*/
 // *TEST RESTAR

 test('RESTA: evita null o undefined', () => {
    expect(restar()).toBe(0);
  });

test('RESTA: Acepta un argumento', () => {
expect(restar(9)).toBe(9);
});

 test('RESTA: recibe 2 argumentos o mas', () =>{
    expect(restar(1,1)).toBe(0);
    expect(restar(8,8,8)).toBe(-8);
    expect(restar(1,1,1,1)).toBe(-2);
 });

 test('RESTA: No recibe strings', () => {
    expect(restar('e', 5)).toBe('not valid');
    });

    /* ----------------------------------------------------------------------------*/
 // *TEST Multiplicar

 test('MULTIPLICA: evita null o undefined', () => {
   expect(multiplicar()).toBe('not valid');
 });

test('MULTIPLICA: Acepta un argumento', () => {
expect(multiplicar(9)).toBe(9);
});

test('MULTIPLICA: recibe 2 argumentos o mas', () =>{
   expect(multiplicar(1,1)).toBe(1);
   expect(multiplicar(8,8,2)).toBe(128);
   expect(multiplicar(1,-1,1,-1)).toBe(1);
});

test('MULTIPLICA: No recibe strings', () => {
   expect(multiplicar('e', 5)).toBe('not valid');
   });

   /* ----------------------------------------------------------------------------*/
 // *TEST Dividir

 test('DIVIDE: evita null o undefined', () => {
   expect(validDivision()).toBe(false);
 });

test('DIVIDE: Falta divisor', () => {
expect(validDivision(9)).toBe(false);
});

test('DIVIDE: recibe 2 argumentos o mas', () =>{
   expect(validDivision(1,1)).toBe(true);
   expect(validDivision(8,8,2)).toBe(true);
   expect(validDivision(1,-1,1,-1)).toBe(true);
   
});

test('DIVIDE: No recibe strings', () => {
   expect(validDivision('e', 5)).toBe(false);
   });

test('DIVIDE: rechaza divisor igual a cero', () => {
   expect(validDivision(0,-1,1,-1)).toBe(true);
   expect(validDivision(1,-1,0,-1)).toBe(false);
   });

