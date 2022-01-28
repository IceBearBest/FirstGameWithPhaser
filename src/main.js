import React from 'react';
// import {HeaderMenu, HomeCarousel} from './navbar';
import './main.css';

class MainTemplate extends React.Component {
    render () {
        return (
            <div id="MainTemplate">
            {/* <HeaderMenu/>
            <HomeCarousel/> */}
             <canvas id="canvas-test"></canvas>
             <button id="game-stop">START</button>   
             <img src="./svg/cat.svg"/>   
            </div>
        )
    }
}

export default MainTemplate;