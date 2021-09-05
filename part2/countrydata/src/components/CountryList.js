import Country from "./Country"

const CountryList = ({countriesToShow},{showCountry}) => {

        return(
        <div>
            {countriesToShow.map(country =>
                <Country country={country} key={country.name} ></Country>
            )}
          </div>
        )
      }
export default CountryList