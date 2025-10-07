import { modificarComidas } from "../ex-02-arrays.js";

test('modificarComidas agrega y quita correctamente', () => {

  const inicio = ['pizza','empanada','milanesa','tarta','hamburguesa'];
  const result = modificarComidas(inicio);

  expect(result).not.toContain('pizza');
  expect(result).toContain('asado');
  expect(result.length).toBe(inicio.length);
});