// This implements a game of a cat jumping around ladders;

import React from 'react';
import {Player} from './player';
import {Ladder} from './ladder';
class CatLadder extends React.Component{
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
        this.keys = {
            right: false,
            left: false,
            up: false
        };
        this.gravity = 0.6;
        this.friction = 0.7;
        this.audio_jump = new Audio('../.././sound/jump2.wav');
    }

    componentDidMount(){
        this.ctx = this.canvasRef.current.getContext('2d');
        this.rescale({x:2,y:1});
        this.ladder = new Ladder(this.ctx, 15, this.unit, this.unit_x, this.unit_y, this.x_offset, this.y_offset);
        this.player = new Player(this.ctx, '../.././svg/cat2.svg', 
            8*(this.unit_x+this.x_offset),
            5*(this.unit_y+this.y_offset),
            0,0,true,
            10*this.unit,
            8*this.unit);
        this.renderCanvas();
        document.addEventListener("keydown",this.keydown.bind(this));
        document.addEventListener("keyup", this.keyup.bind(this));    
        setInterval(this.updatePlayer.bind(this), 20);
    }

    rescale(ratio){
        // set canvas size to full screen
        this.canvas_width = this.canvasRef.current.width = window.innerWidth;
        this.canvas_height = this.canvasRef.current.height = window.innerHeight; 
       
        if (ratio.x !== 0 && ratio.y !== 0){
            // calculate the size of the game region based on the defined ratio
            let game_width = Math.min(this.canvas_width, this.canvas_height/ratio.y*ratio.x);
            let game_height = Math.min(this.canvas_height, this.canvas_width/ratio.x*ratio.y);
            //calculte the size of 100% over width
            this.unit_x = game_width/100.0;
            this.unit_y = game_height/100.0;
            this.x_offset = Math.max(0, this.canvas_width-game_width)/200.0;
            this.y_offset = Math.max(0, this.canvas_height-game_height)/200.0;
        }
        else {
            this.unit_x = this.canvas_width/100.0;
            this.unit_y = this.canvas_height/100.0;
            this.x_offset = 0;
            this.y_offset = 0;
        } 
        this.unit = Math.min(this.unit_x, this.unit_y);  
    }

    renderCanvas(){
        // fill the canvas with background color
        this.ctx.fillStyle = 'CadetBlue';
        this.ctx.fillRect(0, 0, this.canvas_width, this.canvas_height);
        // render the player
        this.player.render();
        // render the platforms;
        this.ladder.render();
    }
    
    render(){
        return(
        <div id="catladder">
        <canvas id="canvas-catladder" ref={this.canvasRef}></canvas>
        </div>
        )
    }

    // record the key state when the key is pressed down
    keydown(e) {
        // 37: left arrow
        if (e.keyCode === 37) {
            this.keys.left = true;
            
        }
        // 38: up arrow or space for jump
        if (e.keyCode === 38 || e.keyCode === 32) {
            if (this.player.jump === false) {
                this.audio_jump.play();
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
        // 38: up arrow or space for jump
        if (e.keyCode === 38 || e.keyCode === 32) {
            if (this.player.y_v < -2) {
                this.player.y_v = -3; // decrease to a small velocity up
            }
        }

        // 39: right arrow
        if (e.keyCode === 39) {
            this.keys.right = false;
        }
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

        this.player.x += this.player.x_v;
        // checks collision with platform
        this.player.jump = true;
        for(let platform of this.ladder.platforms){
            if (platform.x < this.player.x + this.player.width && this.player.x < platform.x+platform.width &&
                this.player.y + this.player.height < platform.y +platform.height && this.player.y + this.player.y_v + this.player.height > platform.y){
                    this.player.y = platform.y-this.player.height;
                    this.player.jump = false;
                    break;}
                            //update position with defined velocity
        }
        if(this.player.jump){
            this.player.y += this.player.y_v;
        }
        if(this.player.y>this.canvas_height){
            this.player.x = this.player.x0;
            this.player.y = this.player.y0;
            this.player.y_v = 0;
            this.player.x_v = 0;
        }
        this.renderCanvas();
    }
}


export {CatLadder};