import {useState, useEffect}from "react";
import axios from "axios";
import Country from './components/Country';
import CountryFilter from './components/CountryFilter';
import CountryList from "./components/CountryList";

const App = () => {
   
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  const handleCountryFilter = (event) => {
    event.preventDefault()
    setCountryFilter(event.target.value)
    //console.log('country filter activated')
  }


  const countriesToShow = countries.filter(
    country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))
  
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {setCountries(response.data)})
  }, [])

  //console.log('To show', countriesToShow)
 
  return(
    <div>
      <CountryFilter country={countryFilter} countryHandler={handleCountryFilter}></CountryFilter>
      <div>{ (countriesToShow.length > 10 || countriesToShow.length < 1) ? "Too many matches,specify another filter": 
              (countriesToShow.length > 1) ? <CountryList countriesToShow={countriesToShow} showCountry={handleCountryFilter}></CountryList> :
              <Country country={countriesToShow.pop()}> </Country>
              
      }</div>
    </div>
  )
}

export default App;
