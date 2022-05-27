class Items {

    constructor(){

        this.items = document.createElement('section');
        this.items.className = 'items';
        this.posX = 0;

        this.currentX = 0
        this.currentY = 0
    
        this.currentXFrm = 0
        this.currentYFrm = 0
        
        this.aimX = 0
        this.aimY = 0
        this.speed = 0.02 
        this.speedFrm = 0.002 
        
        this.XDiv = 210;
        this.YDiv = 120;
        
        this.animate()

    }

    generate(amount, type){

        for(let index = 0; index < amount; index++){

            let item = document.createElement('div');
            item.className = 'item';
            item.style.backgroundImage = `url("../../images/items/${type}/item.png")`;
            item.style.left = Math.random()*2500 + 'px';
            item.style.filter = `hue-rotate(${Math.random() * 180}deg)`

            item.addEventListener('click', () => {
                // document.addEventListener('mousemove', (evt) => {
    
                    // item.style.top = evt.clientY + 'px'
                    // item.style.left = evt.clientX + 'px'
    
                    // console.log(evt.clientY + 'px');
                    // console.log(evt.clientX + 'px');
                    
                // })
                
                document.addEventListener('mousemove', (event) => {
      
                    this.aimX = event.pageX 
                    this.aimY = event.pageY 
    
                    item.style.top = this.aimY + "px"
                    item.style.left = this.aimX + "px"
                    
                })
            
            
            })

            

            this.items.appendChild(item);

        }

        console.log(this.items);
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

    animate() {
      
        this.currentX += (this.aimX - this.currentX) * this.speed;
        this.currentY += (this.aimY - this.currentY) * this.speed;
  
        console.log('its running!')

        requestAnimationFrame( this.animate )

    }

}