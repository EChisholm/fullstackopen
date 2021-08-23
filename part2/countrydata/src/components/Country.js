import React from 'react'

const Country = ({country}) => {
    console.log('country', country)
    country = country[0]
    return(
        <p>{country.name}</p>
    )
}
export default Country