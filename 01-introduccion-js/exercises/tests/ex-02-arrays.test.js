import { modificarComidas } from "../ex-02-arrays.js";

test('modificarComidas agrega y quita correctamente', () => {
  const inicio = ['pizza','empanada','milanesa'];
  const result = modificarComidas(inicio);
  expect(result).toContain('asado');
  expect(result.length).toBe(3);
});