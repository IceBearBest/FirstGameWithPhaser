import './game.css';

class Game {
    constructor(canvas) {
        this.canvas = document.getElementById(canvas);
        // set the canvas as full screen
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.platforms = [];
        this.player = this.createPlayer();
        this.keys = {
            right: false,
            left: false,
            up: false
        };
    }
    
    setup(num=5){
        this.createPlatforms(num);
        document.addEventListener("keydown",this.keydown.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));         
    }

    createPlayer() {
        return {x:200, y:200, x_v: 0, y_v: 0, jump: true, height: 50, width:20 }
    }

    // created designated number of platforms
    createPlatforms(num) {
        for(let i=0; i < num; i++) {
            this.platforms.push(
                {
                    x: 100*i,
                    y: 200 + (30*i),
                    width: 110,
                    height: 15
                }
            );
        }  
    }

    renderCanvas(){ 
        this.ctx.fillStyle = 'Black';
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }

    renderPlatforms(){
        this.ctx.fillStyle = 'Lavender';
        this.platforms.forEach(platform => {
            this.ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        });
        this.ctx.fill();
    }

    renderPlayer(){
        this.ctx.fillStyle = 'Pink';
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
    }

    // Rendering the elements
    loop = (function() {
        if(this.keys.left) {
            this.player.x -= 2.5; // move left
        }
        if(this.keys.right) {
            this.player.x += 2.5 // move right
        }
        this.renderCanvas()
        this.renderPlatforms();
        this.renderPlayer();

    }).bind(this)

    // record the key state when the key is pressed down
    keydown(e) {
        // 37 is the key code for left arrow key
        if (e.keyCode === 37) {
            this.keys.left = true;
            
        }
        // 39 is the key code for right arrow key
        if (e.keyCode === 39) {
            this.keys.right = true;
        }
    }

    // record the key state when the key is released
    keyup(e) {
        // 37 is the key code for left arrow key
        if (e.keyCode === 37) {
            this.keys.left = false;
        }
        // 39 is the key code for right arrow key
        if (e.keyCode === 39) {
            this.keys.right = false;
        }
    }
}

export {Game};