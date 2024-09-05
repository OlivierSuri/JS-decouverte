// you can write js here
console.log('exo-2');

let isTesting = true;




const myDate = new Date();

let weekday = 'jour de la semaine';
let weekend = "c'est le weekend !";

let curentday; 
let curenthour; 



if (isTesting){
    curentday = parseInt(prompt ('enter a day'));
    curenthour = parseInt(prompt ('enter an hour'));
}
else{
    curentday = myDate.getDay();
    curenthour = myDate.getHours();
}

console.log(curentday);
console.log(curenthour);

function isWeekend(curentday, curenthour){
    
    if (curentday === 0 || curentday === 6){
        console.log(weekend);
    }
    else if (curentday === 5 && curenthour >= 17){
        console.log(weekend);
    }
    else if (curentday === 1 && curenthour <= 9){
        console.log(weekend);
    }
    else{
        console.log(weekday);
    }

}
isWeekend(curentday, curenthour);

