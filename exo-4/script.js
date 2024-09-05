// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];

// console.log(secretMessage.length);


function removeLastElement(arr){
    arr.pop();
}
removeLastElement(secretMessage);
// console.log(secretMessage);

function addElement(arr){
    arr.push('to');
    arr.push('program');
}
addElement(secretMessage);
// console.log(secretMessage);

secretMessage[6]='right';
// console.log(secretMessage);

function removeFirstElement(arr){
    arr.shift();
}
removeFirstElement(secretMessage);
// console.log(secretMessage);

function addFirstElement(arr){
    arr.unshift('Programming');
}
addFirstElement(secretMessage);
// console.log(secretMessage);

function replaceByKnow(arr){
    arr.splice(5, 5, 'know');    
}
replaceByKnow(secretMessage);
// console.log(secretMessage);

console.log(secretMessage.join(' '));

