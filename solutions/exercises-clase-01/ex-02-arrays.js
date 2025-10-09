export function modificarComidas(arrayInicial) {
  const comidas = [...arrayInicial];

  comidas.push('asado');
  comidas.shift();

  return comidas;
}
