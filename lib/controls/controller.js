kd.RIGHT.down((evt) => {

    if(boy.posX <= 1030 && evt.shiftKey == true){
        boy.move('right', true)
        game.classList.add('shake')
    }

    else if(boy.posX <= 1030 && evt.shiftKey == false){
        boy.move('right', false)
        game.classList.remove('shake')
    }

    else if(boy.posX > 1030 && evt.shiftKey == true){
        Map.shiftLand('left', true);
        items.shiftItems('left', true);
        game.classList.add('shake')
    }
    else if(boy.posX > 1030 && evt.shiftKey == false){
        Map.shiftLand('left', false);
        items.shiftItems('left', false);
        game.classList.remove('shake')
    }

});
kd.RIGHT.up(() => {
    boy.idle()
    game.classList.remove('shake')
})

kd.LEFT.down((evt) => {

    if(boy.posX >= 230 && evt.shiftKey == true){
        boy.move('left', true)
        game.classList.add('shake')
    }

    if(boy.posX >= 230 && evt.shiftKey == false){
        boy.move('left', false)
        game.classList.remove('shake')
    }

    else if(boy.posX < 230 && evt.shiftKey == true){    
        Map.shiftLand('right', true);
        items.shiftItems('right', true);
        game.classList.add('shake')
    }
    else if(boy.posX < 230 && evt.shiftKey == false){
        Map.shiftLand('right', false);
        items.shiftItems('right', false);
        game.classList.remove('shake')
    }

});
kd.LEFT.up(() => {
    boy.idle()
    game.classList.remove('shake')
})

kd.UP.up(() => {

    boy.jump()

})

// This update loop is the heartbeat of Keydrown
    kd.run(kd.tick);