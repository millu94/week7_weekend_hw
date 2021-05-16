import React, { useState, useEffect, Fragment } from 'react';
import CivSelector from '../components/CivSelector';
import CivInfo from '../components/CivInfo';
import FavCivs from '../components/FavCivs';
import './LearnYourCivs.css';
import Logo from '../aoe2logo.png';

const LearnYourCivsBox = () =>{
    const [civs, setCivs] = useState([]);
    const [selectedCiv, setSelectedCiv] = useState(null);
    const [favCivs, setFavCivs] = useState([]);

    useEffect(() => {
        getCivs();

    }, []);

    const getCivs = function () {
        fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
            .then(res => res.json())
            .then(civs => setCivs(civs.civilizations))
    }

    const onCivSelected = function (civ) {
        setSelectedCiv(civ)
    }

    const addFavCiv = function (civ) {
        const updatedFavourites = [...favCivs, civ]
        setFavCivs(updatedFavourites)
    }

    return (
        <Fragment>
            <header>
                <h1>LEARN YOUR CIVS</h1>

                <img src={Logo} alt="logo"/> 
            </header>

        <div className="container">
            <div className="select-civ">
                <CivSelector civs={civs} onCivSelected={onCivSelected} />
            </div>

            <div className="civ-detail">
                {selectedCiv ? <CivInfo civs={civs} selectedCiv={selectedCiv} addFavCiv={addFavCiv} favCivs={favCivs}/> : null}      
            </div>

            <aside className="favs">
                <u>FAVOURITES</u>
                <FavCivs favCivs={favCivs}/>


            </aside>
        </div>

        </Fragment>
    )


}

export default LearnYourCivsBox;