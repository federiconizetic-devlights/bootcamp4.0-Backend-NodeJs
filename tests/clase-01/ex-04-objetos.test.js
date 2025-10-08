import { auto } from "../../01-introduccion-js/exercises/ex-04-objetos.js";

describe('Ejercicio 04 — Objetos', () => {
  test('El objeto auto tiene las propiedades correctas', () => {
    expect(auto).toHaveProperty('marca');
    expect(auto).toHaveProperty('modelo');
    expect(auto).toHaveProperty('anio');
  });

  test('El método edad() devuelve un número válido', () => {
    const resultado = auto.edad();
    expect(typeof resultado).toBe('number');
    expect(resultado).toBeGreaterThanOrEqual(0);
  });

  test('El método edad() calcula correctamente según el año', () => {
    const currentYear = new Date().getFullYear();
    const esperado = currentYear - auto.anio;
    expect(auto.edad()).toBe(esperado);
  });
});