console.log("exo-7");

console.log(jsonDatas);




let traducteur = {
    car: "Voiture",
    house: "Maison",
    game: "Jeu",
    videoGame: "Jeux Video"
}

jsonDatas.forEach(function(item){
    console.log('item', item)
    item.traducteur = traducteur[item.type];
})

// jsonDatas.forEach(function(item) {
//     console.log("Nom: " + item.name);
//     console.log("Type: " + item.type);
//     console.log("Type: " + item.traducteur);
//     console.log("Description: " + item.description);
//     console.log("Prix: " + item.price);
//     console.log("Quantité: " + item.quantity);
//     console.log("-------------------------");
// });

var container = document.getElementById('data-container');

jsonDatas.forEach(function(item) {
    var itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
        <h2>Nom: ${item.name}</h2>
        <p>Type: ${item.type}</p>
        <p>Traducteur: ${item.traducteur}</p>
        <p>Description: ${item.description}</p>
        <p>Prix: ${item.price}</p>
        <p>Quantité: ${item.quantity}</p>
        <hr>
    `;
    container.appendChild(itemDiv);
});