class Weapon {

    constructor(){

        this.posX = Math.random()*500
        this.Weapon = document.createElement('div')
        this.Weapon..style.backgroundImage = `url('../../images/Weapons/akRight.png')`
        this.Weapon.className = 'item'
        this.Weapon.style.top = '525px'
        this.Weapon.style.width = '180px'
        this.Weapon.style.height = '180px'
        this.Weapon.style.left = this.posX + 'px'
        game.firstChild.appendChild(this.Weapon)

    }

    fire(mode){

        mode == 'auto' ? (console.log('Auto Fire')) : (console.log('Single Shot'))

    }

    shiftItems(direction, faster){

        console.log(direction, faster)
        
        if(direction == 'right' && faster == false){
            
            this.posX+=4;
            this.Weapon.style.left = this.posX + 'px';
            
        }
        else if(direction == 'left' && faster == false){
            
            this.posX-=4;
            this.Weapon.style.left = this.posX + 'px';

        }
        else if(direction == 'right' && faster == true){

            this.posX+=8;
            this.Weapon.style.left = this.posX + 'px';

        }
        else if(direction == 'left' && faster == true){

            this.posX-=8;
            this.Weapon.style.left = this.posX + 'px';

        }


    }

    pick(){

        boy.body.appendChild(this.Weapon)

    }

    reload(){



    }

    drop(){



    }
}