import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from './main';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Game } from './platform';


ReactDOM.render(
   <MainTemplate/>,
    document.getElementById('root')
);

let myGame = new Game('canvas-test');
myGame.setup(15);
myGame.loop();
let button = document.getElementById('game-stop');
let gameState=false;
let id;
button.onclick = function(){
    if(gameState){
        clearInterval(id);
        gameState = false;
        this.innerText = 'START'
    } else{
        id = setInterval(myGame.loop, 22);
        gameState=true;
        this.innerText = 'STOP'
    }
}
