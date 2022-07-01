// => Generate Maps
// => Load Interactables (Soon IA)
// => Load Player
// => Start..

let game = document.querySelector('.game');

//Load Favicon (Optional!)...
new Favicon(2).create();

//Load Map..
let Map = new loadMap();
let grassLandMap = Map.load('snowland');

game.appendChild(grassLandMap);

//Load Player..
let boy = new Player('Dinos/Red');
boy.createUi();


    // Spawn A bot... (Optional!)
    // let divEnem = new Enemy('Dinos/Red');
    // console.log(divEnem)
    // window.requestAnimationFrame( divEnem.chasePlayer )


grassLandMap.appendChild(boy.body);
// grassLandMap.appendChild(divEnem.body)

let items = new Items();
let interactables = items.generate(25, 22500, 'potion/purpslup');
grassLandMap.appendChild(interactables);

let weapon = new Weapon();

