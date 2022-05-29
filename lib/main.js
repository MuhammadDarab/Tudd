// => Generate Maps
// => Load Interactables (Soon IA)
// => Load Player
// => Start..

let game = document.querySelector('.game');

//Load Favicon (Optional!)...
new Favicon(2).create();

//Load Map..
let Map = new loadMap();
let grassLandMap = Map.load('grassLand');

game.appendChild(grassLandMap);

//Load Player..
let boy = new Player('Dinos/Red');
boy.createUi();
grassLandMap.appendChild(boy.body);

let items = new Items();
let interactables = items.generate(25, 22500, 'potion/purpslup');
grassLandMap.appendChild(interactables);

