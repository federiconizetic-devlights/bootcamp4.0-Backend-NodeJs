export function dobles(array) {
    return array.map(element => element * 2);
};

export function pares(array) {
    return array.filter(element => element % 2 === 0);
};

export function sumaTotal(array) {
    return array.reduce((acc , value) => acc + value , 0);
};

export function mayorQue10(array) {
    return array.find(element => element > 10);
};