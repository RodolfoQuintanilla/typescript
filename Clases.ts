enum especie{
    comun, angora,siames,persa
}

class gato {
        nombre:string;
        edad:number;
        esp:especie;
    constructor(n:string,e:number,esp:especie) {
        this.nombre = n;
        this.edad=e;
        this.esp=esp
    }
    datosGato():void{
        console.log("Mi gato se  llama "+this.nombre+" tiene: "+this.edad+ " y su edad es"  + ""+especie[this.esp]);
    }
}

let miGAto = new gato("Benito",7,especie.angora)
let miGAto2 = new gato("rene",9,especie.angora)
miGAto.datosGato();
miGAto2.datosGato()

