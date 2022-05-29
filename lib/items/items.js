class Items {

    constructor(){
        
        this.items = document.createElement('section');
        this.items.className = 'items';
        this.posX = 0;

    }

    generate(amount, range, type){

        for(let index = 0; index < amount; index++){

            let item = document.createElement('div');
            item.className = 'item';
            item.style.backgroundImage = `url("../../images/items/${type}/item.png")`;
            item.style.left = Math.random() * range + 'px';
            item.style.filter = `hue-rotate(${Math.random() * 360 / .5}deg)`

            item.addEventListener('click', () => {
                
                item.style.animation = "Blast 1s"; 
                item.style.transform = 'scale(2.5)'
                item.style.backgroundColor = "transparent";	
                item.style.backgroundImage = `url("../../images/blast/blast.gif")`

            })

            item.addEventListener('animationend', () => {

                //Empty Anim.
                item.style.animation = new String();
                item.style.display = 'none'

            })

            this.items.appendChild(item);

        }

        return this.items;

    }

    shiftItems(direction, faster){

        if(direction == 'right' && faster == false){

            this.posX+=4;
            this.items.style.left = this.posX + 'px';

        }
        else if(direction == 'left' && faster == false){

            this.posX-=4;
            this.items.style.left = this.posX + 'px';

        }
        else if(direction == 'right' && faster == true){

            this.posX+=8;
            this.items.style.left = this.posX + 'px';

        }
        else if(direction == 'left' && faster == true){

            this.posX-=8;
            this.items.style.left = this.posX + 'px';

        }


    }

}