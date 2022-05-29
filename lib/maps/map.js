class loadMap {

    constructor(){

        this.toRender = document.createElement('section');
        this.scenary = document.createElement('div');
        this.ground = document.createElement('div');

        this.scenary.posX = 0;
        this.ground.posX = 0;

        this.scenary.className = 'scenary'
        this.ground.className = 'ground'

        this.toRender.appendChild(this.scenary);
        this.toRender.appendChild(this.ground);

    }

    load(map){

        this.scenary.style.backgroundImage = `url("../../images/maps/${map}/scene.png")`;
        this.ground.style.backgroundImage = `url("../../images/maps/${map}/ground.jpg")`;
        return this.toRender;

    }

    shiftLand(direction, faster){

        if(direction == 'right' && faster == false){

            this.scenary.posX+=2;
            this.scenary.style.backgroundPositionX = this.scenary.posX + 'px';

            this.ground.posX+=4;
            this.ground.style.backgroundPositionX = this.ground.posX + 'px';

        }
        else if(direction == 'left' && faster == false){

            this.scenary.posX-=2;
            this.scenary.style.backgroundPositionX = this.scenary.posX + 'px';

            this.ground.posX-=4;
            this.ground.style.backgroundPositionX = this.ground.posX + 'px';

        }
        else if(direction == 'right' && faster == true){

            this.scenary.posX+=4;
            this.scenary.style.backgroundPositionX = this.scenary.posX + 'px';

            this.ground.posX+=8;
            this.ground.style.backgroundPositionX = this.ground.posX + 'px';

        }
        else if(direction == 'left' && faster == true){

            this.scenary.posX-=4;
            this.scenary.style.backgroundPositionX = this.scenary.posX + 'px';

            this.ground.posX-=8;
            this.ground.style.backgroundPositionX = this.ground.posX + 'px';
            
        }

    }

}