const car = {
    marca: "Honda",
    modelo: "City",
    anio: 2019,
    edad(){
        const year = new Date().getFullYear();
        return year - this.anio;
    }
}