import React from 'react';
import ReactDOM from 'react-dom';
import { ResourceHome, CatLadderHome, CatJumpHome}from './main';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { PhaserGame } from './phaser_game.js';


ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/game/catladder" element={<CatLadderHome></CatLadderHome>}></Route>
            <Route path="/home" element={<ResourceHome></ResourceHome>}></Route>
            <Route path="/game/catjump" element={<CatJumpHome></CatJumpHome>}></Route>
            <Route path="/game/test" element={<PhaserGame></PhaserGame>}></Route>
        </Routes>
    </Router>,
    document.getElementById('root')
);
