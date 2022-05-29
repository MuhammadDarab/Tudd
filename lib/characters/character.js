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

        this.body.addEventListener('animationend',() => {

            this.body.style.animation = new String();

        })

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
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runRight1.gif")`
            this.body.style.left = `${this.posX}px`;
            this.stamina--;
            
        }
        
        else if(direction == 'left'){

            this.posX-=8;
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runLeft1.gif")`
            this.body.style.left = `${this.posX}px`;
            this.stamina--;

        }

    }

    move(direction, faster){

        this.moveAnim(direction, faster)

        if(direction == 'right' && faster == false){
            
            this.posX+=4;
            this.body.style.left = `${this.posX}px`;
            
        }
        
        else if(direction == 'left' && faster == false){

            this.posX-=4;
            this.body.style.left = `${this.posX}px`;

        }

        else if(direction == 'right' && faster == true){
            
            this.posX+=8;
            this.body.style.left = `${this.posX}px`;

        }
        
        else if(direction == 'left' && faster == true){

            this.posX-=8;
            this.body.style.left = `${this.posX}px`;

        }

    }

    moveAnim(direction, faster){
    
        if(direction == 'right' && faster == false){
            
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/walkRight.gif")`
            
        }
        
        else if(direction == 'left' && faster == false){

            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/walkLeft.gif")`

        }

        else if(direction == 'right' && faster == true){
            
            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runRight1.gif")`

        }
        
        else if(direction == 'left' && faster == true){

            this.body.style.backgroundImage = `url("../../images/character/${this.folder}/runLeft1.gif")`

        }

    }

    jump(){

        if(this.posY == 525){

            if(this.body.style.animation == ''){

                this.body.style.animation = 'Jump .4s';

            }
    
        }


    }

    createUi(){

            let Ui = document.createElement('nav');

                this.StaminaBar = document.createElement('div');
                this.StaminaBar.style.paddingTop = '8px';
                this.StaminaBar.style.paddingRight = this.stamina + 'px';
                this.StaminaBar.style.paddingBottom = '8px';
                this.StaminaBar.style.paddingLeft = '0px';
                this.StaminaBar.style.backgroundColor = 'rgb(100, 230, 255)';

            Ui.style.position = 'absolute';
            Ui.style.bottom = '0';
            Ui.style.margin = '24px';

            Ui.appendChild(this.StaminaBar)
        document.body.appendChild(Ui)
        
    }

    changeUi(running){

        if(running)
            this.stamina -= 0.8;
        else
            this.stamina -= 0.04;

        this.StaminaBar.style.paddingRight = this.stamina + 'px';

    }


}