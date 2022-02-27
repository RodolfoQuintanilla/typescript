class Padre {
    protected nombre: string;
    constructor(n: string) {
        this.nombre = n
    }
    datosNombre() {
        console.log("Mi nombre es: " + this.nombre);

    }
}

class Hijo extends Padre {
    edad: number;
    constructor(n: string, e: number) {
        super(n)
        this.edad = e
    }
    datosNombre() {
        console.log('XXXXXXXX');

    }
    dimeEdad() {
        console.log("Mi edad es " + this.edad);
    }
}

class Nieto extends Hijo {
    sexo: string
    constructor(n: string, e: number, s: string) {
        super(n, e)
        this.sexo = s
    }
    datoSexo() {
        console.log("El sexo es " + this.sexo);
    }
}


let p = new Padre("Rodolfo");
p.datosNombre();
let h = new Hijo("Pedro", 5)
h.datosNombre()
h.dimeEdad()

let r = new Nieto("Rosa", 16, "Mujer")
r.datosNombre()
r.dimeEdad()
r.datoSexo()


