import React from 'react';
import {HeaderMenu, HomeCarousel} from './navbar';

class MainTemplate extends React.Component {
    render () {
        return (
            <div id="MainTemplate">
            <HeaderMenu/>
            <HomeCarousel/>
            </div>
        )
    }
}

export default MainTemplate;