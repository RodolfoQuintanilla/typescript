var Prueba = /** @class */ (function () {
    function Prueba(i) {
        this.iteraciones = i;
    }
    Prueba.prototype.contador = function () {
        var cont = 0;
        while (cont < this.iteraciones) {
            console.log("Iteracion " + cont);
            cont++;
            var miprueba = new Prueba(20);
            miprueba.contador();
        }
    };
    return Prueba;
}());
