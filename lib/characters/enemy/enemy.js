class Enemy extends Character{

    constructor(folder){

        super(folder)
        window.EnemyThis = this;
        this.body.className = 'enemy'
        return this;
    
    }

    chasePlayer(){

        if(boy.posX > window.EnemyThis.posX){

            window.EnemyThis.move('right', false);

        }

        else if(boy.posX < window.EnemyThis.posX){

            window.EnemyThis.move('left', false);

        }

        else {

            window.EnemyThis.idle()

        }

        requestAnimationFrame( window.EnemyThis.chasePlayer )

    }

}