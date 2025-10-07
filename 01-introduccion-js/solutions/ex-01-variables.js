
const nombre = "Pepito";
let edad = 30;
const estudiante = true;

function presentar() {
    console.log(`Mi nombre es ${nombre}, tengo ${edad} años y es ${estudiante} que soy estudiante`);
}

function cambiarEdad(nuevaEdad) {
    edad = nuevaEdad;
    return edad;
}