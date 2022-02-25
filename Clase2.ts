class Carro {
    color:string;
    puertas:number;
    year:number
    constructor(c:string, p:number,y:number ) {
        this.color=c;
        this.puertas=p;
        this.year=y;
    }
    ejecurta(){
    console.log( `El color es ${this.color}  cuenta con ${this.puertas} puertas y es del año ${this.year} `);
       
    }
}

const jeta= new Carro('Rojo',4,2021)
const neon = new Carro('azul', 2,1999)
jeta.ejecurta();
neon.ejecurta()