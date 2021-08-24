import React from "react"

const CountryList = ({countriesToShow}) => {
        return(
        <div>
            {countriesToShow.map(country =>
                <p key={country.name}> {country.name} </p>
            )}
          </div>
        )
      }
export default CountryList