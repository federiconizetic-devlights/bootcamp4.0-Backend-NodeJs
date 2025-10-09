export function imprimirFor() {

    const result = [];
    for (let i = 1; i <= 10; i++) result.push(i);

    return result;
};


export function paresWhile() {
    const result = [];
    let j = 1;
    while (j <= 20) {
        if (j % 2 === 0) {
            result.push(j);
        }
        j++;
    }

    return result;
};


export function mayorQue10(n) {

    if (n > 10) return true;

    do {
        n++
    } while (n < 10);
    return true;
};

console.log(imprimirFor());
console.log(paresWhile());
console.log(mayorQue10(2));