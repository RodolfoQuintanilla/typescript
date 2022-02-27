//1)Crear una superclase animal que nos diga el animal es domestico o no,
//el tiempo de gestacion y que el si animal es domestico se pueda modificar con getter y setter
//2) Crear una clase mamífero y otra ave que hereden de animal
//3) Crear una clase gato y otra aguila que hereden de las clase correspondientes



class Animal {
    tipo: boolean
    ani: string
    gestion: string
    constructor(t: boolean, a: string, g: string) {
        this.tipo = t;
        this.ani = a;
        this.gestion = g;
    }
    inicio() {
        if (this.tipo === true) {
            console.log(`El ${this.ani} es domestico y su gestion es${this.gestion}`);

        } else {
            console.log(`El ${this.ani} No es domestico y su gestion es${this.gestion}`);
        }
    }
}
class Mamifero extends Animal {
    mami: boolean
    constructor(t: boolean, a: string, g: string, m: boolean) {
        super(t, a, g)
        this.mami = m
    }
    ejecuta2() {
        if (this.mami) {
            console.log(`El Animal tiene Mama ${this.ani} y nace ${this.gestion}`);

        } else {
            console.log(`El Animal No tiene Mama ${this.ani} y nace ${this.gestion}`);
        }

    }
}

let animalAsignacion = new Animal(true, 'Gato', 'mamifero');
animalAsignacion.inicio()

let animalAsignacion3 = new Mamifero(true, 'Gato', 'mamifero', false);
animalAsignacion3.inicio()