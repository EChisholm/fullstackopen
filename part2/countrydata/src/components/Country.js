import React, {useState} from 'react'

const Country = ({country}) => {
    //console.log('country', country)
    const [showFull, setShowFull] = useState(false)

    const showFullHandler = (event) => {
        event.preventDefault()
        setShowFull(true)
    }

    return(
        showFull ? 
            <div>
                <h1>{country.name}</h1>
                <p>capital {country.capital}</p>
                <p>population {country.population}</p>
                <h2>languages</h2>
                <ul>
                    {country.languages.map(language => 
                    <li key={language.name}>{language.name}</li>
                    )}
                </ul>
                <img src={country.flag} alt={country.name}></img>
            </div> 
            : <div> 
                <p key={country.name}> {country.name} 
                <button value={country} type="button" onClick={showFullHandler}>show</button></p> 
            </div>
    )
}
export default Country