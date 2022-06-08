kd.RIGHT.down((evt) => {

    if(boy.posX <= 1030 && evt.shiftKey == true){
        boy.move('right', true)
        game.classList.add('shake')

        boy.changeUi(true);
    }

    else if(boy.posX <= 1030 && evt.shiftKey == false){
        boy.move('right', false)
        game.classList.remove('shake')

        boy.changeUi(false);
    }

    else if(boy.posX > 1030 && evt.shiftKey == true){
        Map.shiftLand('left', true);
        boy.moveAnim('right', true)
        items.shiftItems('left', true);
        weapon.shiftItems('left', true);
        game.classList.add('shake')

        boy.changeUi(true);
    }
    else if(boy.posX > 1030 && evt.shiftKey == false){
        Map.shiftLand('left', false);
        boy.moveAnim('right', false)
        items.shiftItems('left', false);
        weapon.shiftItems('left', false);
        game.classList.remove('shake')

        boy.changeUi(false);
    }

});
kd.RIGHT.up(() => {
    boy.idle()
    game.classList.remove('shake')
    boy.isNotPlaying = true
})

kd.LEFT.down((evt) => {

    if(boy.posX >= 230 && evt.shiftKey == true){
        boy.move('left', true)
        game.classList.add('shake')

        boy.changeUi(true);
    }

    if(boy.posX >= 230 && evt.shiftKey == false){
        boy.move('left', false)
        game.classList.remove('shake')

        boy.changeUi(false);
    }

    else if(boy.posX < 230 && evt.shiftKey == true){    
        Map.shiftLand('right', true);
        items.shiftItems('right', true);
        weapon.shiftItems('right', true);
        boy.moveAnim('left', true)
        game.classList.add('shake')

        boy.changeUi(true);
    }
    else if(boy.posX < 230 && evt.shiftKey == false){
        Map.shiftLand('right', false);
        boy.moveAnim('left', false)
        items.shiftItems('right', false);
        weapon.shiftItems('right', false);
        game.classList.remove('shake')

        boy.changeUi(false);
    }

});
kd.LEFT.up(() => {
    boy.idle()
    game.classList.remove('shake')
})

kd.UP.up(() => {

    boy.jump()

})

// kd.D.down((evt) => {

//     if(boy.posX <= 1030 && evt.shiftKey == true){
//         boy.move('right', true)
//         game.classList.add('shake')

//         boy.changeUi(true);
//     }

//     else if(boy.posX <= 1030 && evt.shiftKey == false){
//         boy.move('right', false)
//         game.classList.remove('shake')

//         boy.changeUi(false);
//     }

//     else if(boy.posX > 1030 && evt.shiftKey == true){
//         Map.shiftLand('left', true);
//         items.shiftItems('left', true);
//         game.classList.add('shake')

//         boy.changeUi(true);
//     }
//     else if(boy.posX > 1030 && evt.shiftKey == false){
//         Map.shiftLand('left', false);
//         items.shiftItems('left', false);
//         game.classList.remove('shake')

//         boy.changeUi(false);
//     }

// });
// kd.D.up(() => {
//     boy.idle()
//     game.classList.remove('shake')
// })

// kd.A.down((evt) => {

//     if(boy.posX >= 230 && evt.shiftKey == true){
//         boy.move('left', true)
//         game.classList.add('shake')
//     }

//     if(boy.posX >= 230 && evt.shiftKey == false){
//         boy.move('left', false)
//         game.classList.remove('shake')
//     }

//     else if(boy.posX < 230 && evt.shiftKey == true){    
//         Map.shiftLand('right', true);
//         items.shiftItems('right', true);
//         game.classList.add('shake')
//     }
//     else if(boy.posX < 230 && evt.shiftKey == false){
//         Map.shiftLand('right', false);
//         items.shiftItems('right', false);
//         game.classList.remove('shake')
//     }

// });
// kd.A.up(() => {
//     boy.idle()
//     game.classList.remove('shake')
// })

// kd.W.up(() => {

//     boy.jump()

// })

// kd.R.up(() => {
//     boy.play();
// })


// This update loop is the heartbeat of Keydrown
    kd.run(kd.tick);