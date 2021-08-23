import React from 'react'

const CountryFilter = ({country,countryHandler}) => {
    return(
        <form>
            <div>find countries:
            <input value={country} onChange={countryHandler}></input>
            </div>
        </form>
    )
}

export default CountryFilter