import React from 'react';
import './FavCivs.css';

const FavCivs = ({ favCivs }) => {

    const favCivilisations = favCivs.map((civ, index) => {
        return (
                <li className="fav-li" value={index} key={index}>
                    <br />{civ.name}
                    <br />{civ.army_type}
                    <br />{civ.civilization_bonus}
                </li>
        )
    })

    return (
        <div>
            {favCivilisations}
        </div>
    )
}

export default FavCivs;