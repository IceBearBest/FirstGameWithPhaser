// (0,0) --------> x 
//    |
//    |
//    v
//    y
class Game {
    constructor(canvas) {
        this.canvas = document.getElementById(canvas);
        // set the canvas as full screen
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.platforms = [];
        this.player = this.createPlayer();
        this.gravity = 0.6;
        this.friction = 0.7;
        this.keys = {
            right: false,
            left: false,
            up: false
        };
    }
    
    setup(num=5){
        this.createPlatforms(num);
        this.player.img.src = './svg/cat2.svg';
        this.player.img.onload = function(){
            this.ctx.drawImage(this.player.img, this.player.x, this.player.y-this.player.height, this.player.width, this.player.height);
        }.bind(this);
        document.addEventListener("keydown",this.keydown.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));         
    }

    createPlayer() {
        return {x:150, y:230, x_v: 0, y_v: 0, jump: true, height: 100, width:80,
        img: new Image()}
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
        this.ctx.fillStyle = 'CadetBlue';
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
        // this.ctx.fillRect(this.player.x-this.player.width, this.player.y-this.player.height, this.player.width, this.player.height);
        // let img = new Image();
        // img.src = './svg/cat.svg';
        this.ctx.drawImage(this.player.img, this.player.x, this.player.y-this.player.height, this.player.width, this.player.height);
    }

    updatePlayer(){
        // update the velocity according to arrow keys
        if(this.keys.left) {
            this.player.x_v = -2.5; 
        }
        if(this.keys.right) {
            this.player.x_v = 2.5 // 
        }
        // apply the acceleration
        if(this.player.jump === false){
            this.player.x_v *= this.friction; 
        }
        else {
            this.player.y_v += this.gravity; 
        }
        //update position with defined velocity
        this.player.y += this.player.y_v;
        this.player.x += this.player.x_v;
        // checks collision with platform
        this.player.jump = true;
        for(let platform of this.platforms){
            if (platform.x < this.player.x && this.player.x < platform.x + platform.width 
                && platform.y < this.player.y && this.player.y < platform.y + platform.height){
                    this.player.jump = false;
                    this.player.y = platform.y;
                    break;
                }
        }
    }

    // Rendering the elements
    loop = (function() {
        this.updatePlayer();
        this.renderCanvas();
        this.renderPlatforms();
        this.renderPlayer();

    }).bind(this)

    // record the key state when the key is pressed down
    keydown(e) {
        // 37: left arrow
        if (e.keyCode === 37) {
            this.keys.left = true;
            
        }
        // 38: up arrow
        if (e.keyCode === 38) {
            if (this.player.jump === false) {
                this.player.y_v = -10; // jump up with initial velocity = -10
            }
        }

        // 39: right arrow 
        if (e.keyCode === 39) {
            this.keys.right = true;
        }
    }

    // record the key state when the key is released
    keyup(e) {
        // 37: left arrow
        if (e.keyCode === 37) {
            this.keys.left = false;
        }
        // 38: up arrow
        if (e.keyCode === 38) {
            if (this.player.y_v < -2) {
                this.player.y_v = -3; // decrease to a small velocity up
            }
        }

        // 39: right arrow
        if (e.keyCode === 39) {
            this.keys.right = false;
        }
    }
}

export {Game};