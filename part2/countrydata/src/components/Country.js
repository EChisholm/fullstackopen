import React from 'react'

const Country = ({country}) => {
    console.log('country', country)
    return(
        <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
            {country.languages.map(language => 
            <li>{language.name}</li>
            )}
        </ul>
        <img src={country.flag} alt={country.name}></img>
        </div>
    )
}
export default Country