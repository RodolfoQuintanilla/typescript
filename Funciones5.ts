function operacion(
    x:number,
    y:number,
    func: (valor1:number, valor2:number)=>number
   ): number
   {
       return func (x,y);
   }

console.log(operacion(10,4, (x:number,y:number): number=>{return x*y}));
console.log(operacion(14,3, (x:number,y:number):number=>{return x+y}));
console.log(operacion(11,2, (x:number,y:number):number=>{return x/y}));
        