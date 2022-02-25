class miObjeto {
    cadena:string;
    constructor(s:string) {
        this.cadena=s;
    }
    datos(){
        console.log(this.cadena);
        
    }
}

let p = new miObjeto("XXX");
p.datos();

//Caso2

let imprimir = function (cad1,cad2) {
    return {
       nombre: cad1,
       devuelveCadena: function() {
         console.log(this.nombre);
       },
       nombre2: {
         nombre:cad2,
         devuelveCadena: function() {
            console.log(this.nombre);
         }
        }
     };
  };
  let aux = imprimir("Hola", "Adios");
aux.devuelveCadena();
aux.nombre2.devuelveCadena();