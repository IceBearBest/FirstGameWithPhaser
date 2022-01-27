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
             <button id="game-stop">Stop</button>       
            </div>
        )
    }
}

export default MainTemplate;