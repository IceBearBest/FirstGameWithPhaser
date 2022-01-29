import React from 'react';
import {HeaderMenu, HomeCarousel} from './navbar';
import './main.css';
import {CatJump} from "./cat-jump";
import { CatLadder } from './cat-ladder';

class ResourceHome extends React.Component {
    render () {
        return (
            <div id="MainWindow">
            <HeaderMenu/>
            <HomeCarousel/>
            </div>
        )
    }
}

class CatLadderHome extends React.Component {
    render () {
        return (
            <CatLadder></CatLadder>
        )
    }
}

class CatJumpHome extends React.Component {
    render() {
        return (
            <CatJump></CatJump>
        )
    }
}

export {ResourceHome, CatLadderHome, CatJumpHome};