import React from 'react';
import './Civinfo.css';

const CivInfo = ({ selectedCiv, addFavCiv, favCivs }) => {

    const handleButtonSubmit = () => {
        if (!favCivs.includes(selectedCiv)) {
            addFavCiv(selectedCiv);
        }
    }




    const civBonus = selectedCiv.civilization_bonus.map((bonus, index) =>{
        return <li key={index} className="civBonus-item">{bonus}</li>
    })




    return (
        <div className="info-box">
            <h2>{selectedCiv.name}</h2>
            <p><b>{selectedCiv.army_type}</b></p>
            <p><b>{civBonus}</b></p>
            {/* <div className="unique">
                <p><b>{selectedCiv.unique_unit}</b></p>
                <p><b>{selectedCiv.unique_tech}</b></p>
            </div> */}
            <button onClick={handleButtonSubmit}>Add Favourite</button>
        </div>
    )
}

export default CivInfo;