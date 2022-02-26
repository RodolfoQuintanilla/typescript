interface IceCream{
    flavor:string,
    scoops:number
}

let iceCream:IceCream={
    flavor:'Valla',
    scoops:50
}

console.log(iceCream);

function tooManyScoops(dessert: IceCream) {
   if (dessert.scoops >= 4) {
      return dessert.scoops + ' is too many scoops!';
   } else {
      return 'Your order will be ready soon!';
   }
}

console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));