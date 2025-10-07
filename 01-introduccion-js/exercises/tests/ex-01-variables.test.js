import { presentar , cambiarEdad , nombre , edad , estudiante } from "../ex-01-variables.js";

describe('Ejercicio 01 — Variables y Tipos', () => {
  test('Las variables existen y tienen tipo correcto', () => {
    expect(typeof nombre).toBe('string');
    expect(typeof edad).toBe('number');
    expect(typeof estudiante).toBe('boolean');
  });

  test('La función presentar devuelve el texto esperado', () => {
    const texto = presentar();
    expect(texto).toMatch(/Mi nombre es/);
    expect(texto).toContain(nombre);
    expect(texto).toContain(edad.toString());
  });

  test('cambiarEdad modifica la edad', () => {
    const nueva = cambiarEdad(30);
    expect(nueva).toBe(30);
  });
});
