import React from "react"

const CountryList = ({countriesToShow}) => {
        return(
        <div>
            {countriesToShow.map(country =>
                <p> {country.name} </p>
            )}
          </div>
        )
      }
export default CountryList