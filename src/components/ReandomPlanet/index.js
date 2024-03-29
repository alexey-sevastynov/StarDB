import React, { Component } from 'react';

//client Api
import SwapiService from '../../services'
import Spinner from '../spinner/Spinner';

//styles 
import './randomPlanet.css';

export default class RandomPlanet extends Component {

    SwapiServices = new SwapiService();

    state = {
        planet: {},
        loading: true,
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet, loading: false });
    };

    updatePlanet() {
        const id = Math.floor(Math.random() * 25 + 2);
        console.log(id);
        this.SwapiServices.getPlanets(id)
            .then(this.onPlanetLoaded);
    };




    render() {

        const {
            planet: { id, name, population, rotationPeriod, diameter },
            loading } = this.state;

        return (
            <div className='random-planet jumbotron rounded'>
                {loading ? <Spinner /> :
                    <>
                        <img
                            className='planet-image'
                            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                            alt="img" />
                        <div className='ml-20'>
                            <h4>{name}</h4>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <span className='term'>Population</span>
                                    <span className='ml-20'>{population}</span>
                                </li>
                                <li className='list-group-item'>
                                    <span className='term'>Rotation Period</span>
                                    <span className='ml-20'>{rotationPeriod}</span>
                                </li>
                                <li className='list-group-item'>
                                    <span className='term'>Diameter</span>
                                    <span className='ml-20'>{diameter}</span>
                                </li>
                            </ul>
                        </div>
                    </>
                }
            </div>
        );
    };

};