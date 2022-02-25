enum especieGato{ comun, angora,siames,persa}

interface animal{
    nombre:string,
    edad: number,
   datos (): void
}

class Gato implements animal  {
    nombre: string;
    edad: number;
    esp:especieGato;
    constructor(n:string, e:number, esp:especieGato) {
        this.nombre= n;
        this.edad= e;
        this.esp=esp;
    }
    datos(): void {
           console.log("Mi gato se  llama "+this.nombre+" tiene: "+this.edad+ " y su edad es"  + ""+especieGato[this.esp]);
    }
}

class Perro implements animal {
    nombre: string;
    edad: number;

    constructor(n:string, e:number) {
        this.nombre=n;
        this.edad= e;
    }
    datos():void{
          console.log("Mi perro se  llama "+this.nombre+" tiene: "+this.edad+ " de edad "  );
    }
}


let cachorro= new Perro("Muffin",10)
cachorro.datos()

let consulta = new Gato("Garfield",7,especieGato.siames)
consulta.datos();

