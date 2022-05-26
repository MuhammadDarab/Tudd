class Character {

    constructor(folder){
        this.folder = folder;
        this.body = document.createElement('section');
        this.body.style.backgroundImage = `url("../../../images/character/${this.folder}/idleRight.gif")`
        this.body.style.padding = '80px'
        // this.body.style.backgroundColor = 'blue'

        this.body.className = 'player';
        this.posX = 0;
        this.posY = 525;

        this.health = 500;
        this.stamina = 350;
        this.type = 'player';
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
    
    //Deprecated!
    jump(jumpType){

        //Very Buggy! => Needs a better approach!
        if(jumpType == 'singleJump'){    

            if(this.posY == 525){

                let latest = setInterval(() => {});

                for(let i=0;i<latest;i++)
                    clearInterval(i);

                let flight = 0;

                let JumpInt = setInterval(() => {

                    if(this.posY > 350 && flight == 0){

                        this.posY-=5;
                        this.body.style.top = this.posY + 'px';

                    }
                    else if(this.posY == 350 && flight != 3){

                        flight++;

                    }
                    else if(this.posY >= 350 && flight == 3){

                        if(this.posY != 525){

                            this.posY+=5;
                            this.body.style.top = this.posY + 'px';
        
                        }
                        else{
                            clearInterval(JumpInt)
                        }

                    }
                    

                }, 0)

            }
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
            
        }
        
        else if(direction == 'left'){

            this.posX-=8;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runLeft.gif")`
            this.body.style.left = `${this.posX}px`;

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