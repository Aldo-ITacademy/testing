//  *Crea els tests corresponents per verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

const {anidar} = require('../app/promises_callbacks');

test('Regresa resultado exitosamente ID=1', async () => {
    const data = await anidar(1);
    expect(data).toBe('exitoso');
  });
  
  test('Regresa resultado exitosamente ID=2', async () => {
    const data = await anidar(2);
    expect(data).toBe('exitoso');
  });

  test('Regresa resultado exitosamente ID=3', async () => {
    const data = await anidar(3);
    expect(data).toBe('exitoso');
  });


  test('Muestra por pantalla que no existe empleado con ese ID', async () => {
    const data = await anidar(4);
    expect(data).toBe('exitoso');
  });


  test('Muestra por pantalla que no encuentra ID con string', async () => {
    const data = await anidar('a');
    expect(data).toBe('exitoso');
  });