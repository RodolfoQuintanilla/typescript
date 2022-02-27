interface Icecream {
    flavor: string;
    scoops: number;
    instructions?: string;
}

let iceCream: Icecream = {
    flavor: 'Valilla',
    scoops: 2
}
console.log(iceCream.flavor);


function tooManyScoops(dessert: Icecream) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}

console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));