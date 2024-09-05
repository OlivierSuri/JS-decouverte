// you can write js here

console.log('exo-5');

let input = (prompt("Your sentence to translate"));
input = input.toLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];


function getLetter(input){
    let resultArray =[];
    for (let i = 0; i <= input.length; i ++){
        console.log(input[i]);
        for(j=0; j<vowels.length; j++){
            if (input[i] === vowels[j]){                
                resultArray.push( input[i].toUpperCase() );
                break;
            }
        }
    }
    return resultArray; 
}


let result = getLetter(input);

// resultArray.toUpperCase();
console.log('mot final', result.join(' '));
// const indexOfA = input.indexOf(vowels[0]);
// console.log(indexOfA);