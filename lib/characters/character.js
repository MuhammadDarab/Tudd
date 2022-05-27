class Character {

    constructor(folder){
        this.folder = folder;
        this.body = document.createElement('section');
        this.body.style.backgroundImage = `url("../../../images/character/${this.folder}/idleRight.gif")`
        this.body.style.padding = '80px'

        this.posX = 0;
        this.posY = 525;

        this.health = 500;
        this.stamina = 350;
        this.body.style.position = 'absolute';
        this.body.style.top = this.posY + 'px';


    }

    walk(direction){

        if(direction == 'right'){
            
            this.posX+=4;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/walkRight.gif")`
            this.body.style.left = `${this.posX}px`;
            
        }
        
        else if(direction == 'left'){

            this.posX-=4;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/walkLeft.gif")`
            this.body.style.left = `${this.posX}px`;

        }

    }
    
    idle(){

        this.body.style.backgroundImage = `url("../../images/character/${this.folder}/idleRight.gif")`

    }

    talk(name){
        console.log('Hi There!, name\'s ' + name);
    }

    damage(amount){

        this.health = this.health - amount;

    }

    heal(amount){

        this.health = this.health + amount; 
        this.health = this.health + (amount / 2); 

    }

    run(direction){

        if(direction == 'right'){
            
            this.posX+=8;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runRight.gif")`
            this.body.style.left = `${this.posX}px`;
            this.stamina--;
            
        }
        
        else if(direction == 'left'){

            this.posX-=8;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runLeft.gif")`
            this.body.style.left = `${this.posX}px`;
            this.stamina--;

        }

    }

    move(direction, faster){

        if(direction == 'right' && faster == false){
            
            this.posX+=4;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/walkRight.gif")`
            this.body.style.left = `${this.posX}px`;
            
        }
        
        else if(direction == 'left' && faster == false){

            this.posX-=4;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/walkLeft.gif")`
            this.body.style.left = `${this.posX}px`;

        }

        else if(direction == 'right' && faster == true){
            
            this.posX+=8;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runRight.gif")`
            this.body.style.left = `${this.posX}px`;
            
        }
        
        else if(direction == 'left' && faster == true){

            this.posX-=8;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runLeft.gif")`
            this.body.style.left = `${this.posX}px`;

        }

    }

}