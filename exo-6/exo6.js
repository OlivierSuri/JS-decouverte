// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
// console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
// console.log(joeInfo.bathrooms = joeInfo.bathrooms +3);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
// console.log(joeInfo.garage = true);


let team ={
    players: [
        {
            firstName: "John",
            lastName: "Stark",
            age: 19
        }
    ],
    games: [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        }
    ],

    
}

let addPlayer = (firstName, lastName, age) => {
    
    let newplayer = {
    firstName: firstName,
    lastName: lastName,
    age: age
    }
    team.players.push(newplayer);
}

addPlayer("Robert", "Barathéon", 68);
addPlayer("Ned", "Stark", 60);
addPlayer("Machin", "Marthel", 24);
// console.log(team.players);


let addGame = (opponent, teamPoints, opponentPoints) => {
    
    let newgame = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    }
    team.games.push(newgame);
}

addGame("Lannister", 120, 12);
addGame("Lannister", 45, 50);
addGame("Lannister", 60, 40);
// console.log(team.games);

let totalpoint = 0;
let maxAge = 0;
for (let game of team.games){
    console.log('current game', game)
    totalpoint += game.teamPoints;
    if (game.teamPoints > maxAge){
        maxAge = game.teamPoints;
    }
    else{
        
    }
}
console.log(totalpoint);


let medianPoint = totalpoint / team.games.length;
console.log(medianPoint);

console.log(maxAge);




