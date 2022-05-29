class Favicon {

    constructor(randomness){

        this.randomness = randomness;
        return this;
    
    }

    create(){

        this.head = document.querySelector('head');
        this.favicon = document.createElement('link');
        this.favicon.rel = "icon";
        this.favicon.type = "image/gif";
        this.favicon.href = `/images/logos/favicons/${Math.trunc(Math.random() * this.randomness)}.gif`;
    
        this.head.appendChild(this.favicon)

    }


}