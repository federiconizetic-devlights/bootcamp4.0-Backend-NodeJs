import { evaluarNota, diaDeLaSemana } from '../../02-javascript-avanzado/exercises/ex-02-control-flujo.js';

describe('Ejercicio 02 - Control de flujo', () => {

  test('evaluarNota retorna "Aprobado" para nota >= 6', () => {
    expect(evaluarNota(7)).toBe('Aprobado');
  });

  test('evaluarNota retorna "Desaprobado" para nota < 6', () => {
    expect(evaluarNota(5)).toBe('Desaprobado');
  });

  test('diaDeLaSemana retorna nombre correcto del día', () => {
    expect(diaDeLaSemana(1)).toBe('Lunes');
    expect(diaDeLaSemana(5)).toBe('Viernes');
    expect(diaDeLaSemana(7)).toBe('Domingo');
  });

  test('diaDeLaSemana retorna "Número inválido" para número fuera de rango', () => {
    expect(diaDeLaSemana(10)).toBe('Número inválido');
  });

});
