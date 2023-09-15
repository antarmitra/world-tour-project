import { useState } from 'react';
import './country.css'
import CountryDetails from '../countryDetails/countryDetails';
export default function Country({ country, handleVisitedCountry,  handleVisitedFlags }) {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () =>{
        handleVisitedCountry(country);
    }

    // const flaWithParams = () => {
    //     handleVisitedFlags(flag);
    // }


    

    console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'Purple': 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={passWithParams} >Mark Visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)} >Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this Country': 'I want to visit'}
            <hr />
            <CountryDetails>
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            </CountryDetails>
        </div>
    )
}