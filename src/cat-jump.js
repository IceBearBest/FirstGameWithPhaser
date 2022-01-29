// This implements a game of jumping over obstacles;

import React from 'react';
class CatJump extends React.Component{
    constructor(props){
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount(){
        this.ctx = this.canvasRef.current.getContext('2d');
        this.ctx.fillStyle = 'CadetBlue';
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
    
    render(){
        return(
        <div id="catjump">
        <h1>This is a game of a cat jumping over obstacles</h1>
        <canvas id="canvas-catjump" ref={this.canvasRef}></canvas>
        </div>
        )
    }
}
export {CatJump};