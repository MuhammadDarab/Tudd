class Anim {

    constructor(){

        window.currentX = 0
        window.currentY = 0
    
        window.aimX = 0
        window.aimY = 0
        window.speed = 0.05 

        window.smoothFollow = this.smoothFollow
        window.requestAnimationFrame( window.smoothFollow )
    }

    smoothFollow(){

        console.log('Ticked from Anim!')

        window.currentX += (window.aimX - window.currentX) * window.speed;
        window.currentY += (window.aimY - window.currentY) * window.speed;

        window.requestAnimationFrame( window.smoothFollow )

    }



}


// Step 1
// => Extend Item class to Anim Class
// Step 2
// => Place This inside item click to get smooth Movements...

    // document.addEventListener('mousemove', (event) => {

    //     window.aimX = event.pageX 
    //     window.aimY = event.pageY 

    //     item.style.top = window.currentY + "px"
    //     item.style.left = window.currentX + "px"
        
    // })