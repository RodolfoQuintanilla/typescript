//1) Hacer la serie de fibonacci en TS
let limite:number=10;
let fibo:number[]=[0,1];

for (let i = 2; i <= limite;  i++) {
fibo.push(fibo[i-1] + fibo[i-2]);
	console.log(fibo[i]+"<br/>");	
}
//2) Devolver los primeros 100 numeros impares

for (let y:number = 0; y <=100; y++) {

if (y%2===1) {
    console.log(y);   
}
}


//3) Hacer un menu que nos devuelva una opción u otra

let menu:number=2

switch (menu) {
    case 1:
        console.log('Menu');
        break;

          case 2:
        console.log('We');
        break;

    default:
        break;
}

