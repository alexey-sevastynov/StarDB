import React, { Component } from 'react';

//styles 
import './randomPlanet.css';

export default class RandomPlanet extends Component {
    render() {
        return (
            <div className='random-planet'>
                <img
                    className='planet-image'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg"
                    alt="img" />
            </div>
        );
    }
}
