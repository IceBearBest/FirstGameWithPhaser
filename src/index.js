import React from 'react';
import ReactDOM from 'react-dom';
import { ResourceHome, CatLadderHome, CatJumpHome}from './main';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/game/catladder" element={<CatLadderHome></CatLadderHome>}></Route>
            <Route path="/home" element={<ResourceHome></ResourceHome>}></Route>
            <Route path="/game/catjump" element={<CatJumpHome></CatJumpHome>}></Route>
        </Routes>
    </Router>,
    document.getElementById('root')
);

// let myGame = new Game('canvas-test');
// myGame.setup(15);
// myGame.loop();
// let button = document.getElementById('game-stop');
// let gameState=false;
// let id;
// button.onclick = function(){
//     if(gameState){
//         clearInterval(id);
//         gameState = false;
//         this.innerText = 'START'
//     } else{
//         id = setInterval(myGame.loop, 22);
//         gameState=true;
//         this.innerText = 'STOP'
//     }
// }
