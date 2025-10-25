// 🎯 EJERCICIO 2: Cuenta Bancaria
// Practica propiedades privadas y métodos de acceso

// TODO 1: Crea una clase "CuentaBancaria" que tenga:
// - titular (string, público)
// - saldo (number, PRIVADO)
// - numeroCuenta (string, público)

class CuentaBancaria {
    // Completa aquí las propiedades (recuerda: saldo debe ser PRIVATE)

    // TODO 2: Constructor que reciba titular y numeroCuenta
    // El saldo inicial debe ser 0
    constructor(/* parámetros aquí */) {
        // Asignar valores aquí
    }

    // TODO 3: Método "consultarSaldo" que retorne el saldo actual
    // (Es la única forma de ver el saldo desde afuera)
    consultarSaldo(): number {
        // Completa aquí
    }

    // TODO 4: Método "depositar" que:
    // - Reciba una cantidad (number)
    // - Si la cantidad es mayor a 0, la sume al saldo
    // - Retorne el nuevo saldo
    // - Si la cantidad es 0 o negativa, muestre "Cantidad inválida"

    depositar(cantidad: number): number {
        // Completa aquí
    }

    // TODO 5: Método "retirar" que:
    // - Reciba una cantidad (number)
    // - Si hay suficiente saldo Y la cantidad es positiva, la reste del saldo
    // - Retorne el nuevo saldo
    // - Si no hay suficiente saldo, muestre "Saldo insuficiente"
    // - Si la cantidad es 0 o negativa, muestre "Cantidad inválida"

    retirar(cantidad: number): number {
        // Completa aquí
    }

    // TODO 6: Método "mostrarInfo" que retorne:
    // "Cuenta: [numeroCuenta] | Titular: [titular] | Saldo: $[saldo]"
    mostrarInfo(): string {
        // Completa aquí
    }
}

// 🎉 Ejecuta: tsc ex-02-cuenta-bancaria.ts