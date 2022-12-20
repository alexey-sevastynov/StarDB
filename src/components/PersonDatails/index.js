import React, { Component } from 'react';

//styles 
import './personDatails.css';

export default class PersonDatails extends Component {
    render() {
        return (
            <div className='person-details card '>
                <img className='person-image' src="https://ichef.bbci.co.uk/news/600/cpsprodpb/06FD/production/_93998710_16427450_10206889967482441_7675184686226534234_n.jpg"
                    alt="img" />

                <div className='card-body'>
                    <h4>R2-D2</h4>
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                            <span className='term'>Gender</span>
                            <span>male</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Birth Year</span>
                            <span>43</span>
                        </li>
                        <li className='list-group-item'>
                            <span className='term'>Eye color</span>
                            <span>red</span>
                        </li>

                    </ul>

                </div>
            </div>
        );
    }
}
