// you can write js here
var kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
kelvins = parseInt(kelvins);

let celsius = kelvins - 273;
console.log(celsius);


let fahrenheits = celsius * (9/5) + 32;
fahrenheits = Math.floor(fahrenheits);
console.log(fahrenheits);