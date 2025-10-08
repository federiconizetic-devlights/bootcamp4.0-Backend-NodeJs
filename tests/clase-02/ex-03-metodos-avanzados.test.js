import { dobles, pares, sumaTotal, mayorQue10 } from '../../02-javascript-avanzado/exercises/ex-03-metodos-avanzados.js';

describe('Ejercicio 03 - Métodos avanzados de Arrays', () => {

  const numeros = [1,2,3,4,5,11];

  test('dobles devuelve array con elementos multiplicados por 2', () => {
    expect(dobles(numeros)).toEqual([2,4,6,8,10,22]);
  });

  test('pares devuelve solo los números pares', () => {
    expect(pares(numeros)).toEqual([2,4]);
  });

  test('sumaTotal devuelve la suma de todos los elementos', () => {
    expect(sumaTotal(numeros)).toBe(26);
  });

  test('mayorQue10 devuelve el primer número mayor a 10', () => {
    expect(mayorQue10(numeros)).toBe(11);
  });

});