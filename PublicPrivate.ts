class miObjeto {


    constructor(private readonly texto: string) {

    }
    datos() {
        console.log(this.texto);

    }
}

let aux = new miObjeto("XXX");
aux.datos();