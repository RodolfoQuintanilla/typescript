let condicion:boolean=true;
if (condicion) {
    console.log('esto se ejecuta');
    
}

let dia:number=1;

switch (dia) {
    case 1:
      console.log('Lunes');  
        break;


    default:
        break;
}

for (let i = 0;  i< 66; i++) {
console.log(i);
}

let arra:string[]=["Hola","me","llamo"];

for (const elemento of arra) {
    console.log(elemento);
}

let num:number=3;
while (num<57) {
    console.log(num); 
 num= num*2
}

let i: number= 5;
do
{ 
    console.log("El número es "+ i);
    i++
}while(i<7)