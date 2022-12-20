import React from 'react';

//styles
import './header.css';

function Header() {
    return (
        <div className='header'>
            <div>Star DB</div>
            <ul>
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    );
};

export default Header;