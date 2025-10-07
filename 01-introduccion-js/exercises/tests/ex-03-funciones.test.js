import { esPar, promedio } from "../ex-03-funciones.js";

describe("Funciones básicas", () => {
  test("esPar debe retornar true para números pares", () => {
    expect(esPar(4)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
    expect(esPar(-2)).toBe(true);
  });

  test("Promedio calcula correctamente", () => {
    expect(promedio([2, 4, 6])).toBe(4);
    expect(promedio([])).toBe(0);
    expect(promedio([5])).toBe(5);
  });
});
