class Player extends Character {

    constructor(folder){
        super(folder)
        this.body.className = 'player'
        this.createUI()
    }

    createUI(){

        let game = document.querySelector('.game');
        let UI = document.createElement('div');
        UI.innerHTML = `<div style='padding: 20px 280px 20px 20px; background-color: green' ></div>`;
        UI.style.position = 'absolute'
        UI.style.top = '690px'
        UI.style.left = '100px'
        game.appendChild(UI)

    }

}