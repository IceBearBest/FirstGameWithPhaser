import React from 'react';
import ReactDOM from 'react-dom';
import MainTemplate from './main';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Game } from './game';


ReactDOM.render(
   <MainTemplate/>,
    document.getElementById('root')
);

let myGame = new Game('canvas-test');
myGame.setup();
myGame.loop();
let button = document.getElementById('game-stop');
let gameState=false;
let id;
button.onclick = function(){
    if(gameState){
        clearInterval(id);
        gameState = false;
    } else{
        id = setInterval(myGame.loop, 22);
        console.log('started');
        gameState=true;
    }
}