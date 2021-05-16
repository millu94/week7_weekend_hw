import React from 'react';


const CivSelector = ({ civs, onCivSelected }) => {

    const handleChange = function(event) {
        const chosenCiv = civs[event.target.value];
        onCivSelected(chosenCiv);
    }

    const civOptions = civs.map((civ, index) => {
        return <option defaultValue="" value={index} key={index}>{civ.name}</option>
    })




    return (
        <>
            <select defaultValue="" onChange={handleChange}>
                <option>Select Civilisation</option>
                {civOptions}
            </select>
        </>
    )
}

export default CivSelector