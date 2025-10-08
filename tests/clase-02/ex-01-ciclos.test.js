import { imprimirFor, paresWhile, mayorQue10 } from '../../02-javascript-avanzado/exercises/ex-01-ciclos';

describe('Ejercicio 01 - Ciclos', () => {

  test('imprimirFor devuelve números del 1 al 10', () => {
    expect(imprimirFor()).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });

  test('paresWhile devuelve números pares del 1 al 20', () => {
    expect(paresWhile()).toEqual([2,4,6,8,10,12,14,16,18,20]);
  });

  test('mayorQue10 devuelve true si valor > 10', () => {
    expect(mayorQue10(12)).toBe(true);
  });

  test('mayorQue10 devuelve true si valor <= 10 pero incrementando llega a >10', () => {
    expect(mayorQue10(5)).toBe(true);
  });

  test('mayorQue10 devuelve false si valor inicial ya es >10', () => {
    expect(mayorQue10(15)).toBe(true);
  });
});
