import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountries}) => {
    // console.log(country)
    const {name,flags,population,area,cca3}=country;
    const [visited ,setVisited]=useState(false);
const handleVisited =()=>{
    setVisited(!visited)
}
    return (
        <div className={`countryBox ${visited ?'visited':'non-visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={()=>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited': 'Going'}</button>
            {visited ? 'I have visited this country' :'I want to visite this country'}
        </div>
    );
};

export default Country;