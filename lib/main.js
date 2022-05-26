// => Generate Maps
// => Load Interactables (Soon IA)
// => Load Player
// => Start..

let game = document.querySelector('.game');

//Load Map..
let Map = new loadMap();
let grassLandMap = Map.load('grassLand');

game.appendChild(grassLandMap);

//Load Player..
let boy = new Player('Dinos/Red');
grassLandMap.appendChild(boy.body);

let items = new Items();
let interactables = items.generate(10, 'potion/purpslup');
console.log(items);
console.log(interactables);
grassLandMap.appendChild(interactables);



