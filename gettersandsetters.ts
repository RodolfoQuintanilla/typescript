class Padre {
    private _nombre: string;
    constructor(n: string) {
        this._nombre = n
    }
    get nombre(): string {
        return this._nombre;
    }


    public set nombre(v: string) {
        this._nombre = v;
    }

}
let p = new Padre("Juan")
console.log(p.nombre);
p.nombre = "Manuelito"
console.log(p.nombre);

