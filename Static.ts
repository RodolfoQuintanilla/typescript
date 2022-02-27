class Ejemplo {

    public num: number;
    static estatico: number;

    constructor(n: number) {
        this.num = n;
        Ejemplo.estatico++;
    }
}
Ejemplo.estatico = 23
console.log(Ejemplo.estatico);

