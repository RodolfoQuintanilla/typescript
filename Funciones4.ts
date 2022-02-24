function multiplicar (x: number, y: number):number
{
       return x*y; 
}

function aux (x: number, y: number)
{
       console.log(x*y); 
}

function sumar(x:number,y:number):number 
{
    console.log("Funcion suma");
    return x+y;
}

function fibonacci(vecesSucesion:number):number[]
{
    let numeros=[0,1];
    let i=2;
    console.log("Funcion fibonacci");
    while(i<=vecesSucesion)
    {
    
        numeros[i] = sumar(numeros[i-2] ,numeros[i-1]);
		i++;
    }

    return numeros;

}


let funcionMultiplicar = multiplicar;
let funcionMultiplicar2:(x: number, y: number)=>number;
funcionMultiplicar2 =multiplicar;

console.log(funcionMultiplicar(3,4));
console.log(funcionMultiplicar2(5,4));

let AuxFibo = fibonacci(15);
console.log(AuxFibo);
