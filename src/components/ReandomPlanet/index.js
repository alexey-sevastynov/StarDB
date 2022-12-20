import React, { Component } from 'react';

//styles 
import './randomPlanet.css';

export default class RandomPlanet extends Component {

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diametr: null
    }


    render() {

        const { name, population, rotationPeriod, diametr } = this.state;

        return (
            <div className='random-planet jumbotron rounded'>
                <img
                    className='planet-image'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/800px-The_Blue_Marble_%28remastered%29.jpg"
                    alt="img" />
                <div className='ml-20'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Population</span>
                            <span>{population}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Diametr</span>
                            <span>{diametr}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
