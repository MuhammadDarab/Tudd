class Weapon {

    constructor(){

        this.posX = Math.random()*500
        this.Weapon = document.createElement('div')
        this.Weapon.style.backgroundImage = `url('../../images/Weapons/akRight.png')`
        this.Weapon.classList.add('item')
        this.Weapon.style.top = '525px'
        this.Weapon.style.width = '180px'
        this.Weapon.style.height = '180px'
        this.Weapon.style.left = this.posX + 'px'
        game.firstChild.appendChild(this.Weapon)

    }

    fire([top, left]){

        let hit = document.createElement('div')
        hit.style.position = 'absolute';
        hit.style.padding = '40px';
        // hit.style.backgroundColor = 'red';
        hit.style.backgroundImage = 'url("../../images/weapons/bulletHole.png")'
        hit.style.backgroundSize = 'contain'
        hit.style.top = (top + Math.trunc(Math.random()*100)) + 'px';
        hit.style.left = (left + Math.trunc(Math.random()*100)) + 'px';
        hit.style.transition = '.4s'
        document.body.appendChild(hit)
        
        setTimeout(() => {
            hit.style.opacity = 0;
            document.body.removeChild(hit)
        }, 400)
    
    }

    flipTo(direction){

        direction == 'right' ? ( this.Weapon.style.backgroundImage = `url('../../images/Weapons/akRight.png')` ) :  ( this.Weapon.style.backgroundImage = `url('../../images/Weapons/akLeft.png')` )

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

    interact(mode){

        mode == 'pick' ? (
            boy.body.appendChild(this.Weapon),
            this.Weapon.classList.remove('item'),
            this.Weapon.classList.add('itemPicked'),
            document.body.style.cursor = 'crosshair'
        ) :
        (
            this.Weapon.style.left = boy.body.style.left,
            game.appendChild(this.Weapon),
            this.Weapon.classList.remove('itemPicked'),
            this.Weapon.classList.add('item'),
            document.body.style.cursor = 'pointer'
        )    

    }

    rotate(deg){

        this.Weapon.style.transform = `rotate(${deg}deg)`

    }

    

}