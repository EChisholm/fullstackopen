import {useState, useEffect}from "react";
import axios from "axios";
import Country from './components/Country';
import CountryFilter from './components/CountryFilter';
import CountryList from "./components/CountryList";

const App = () => {
   
  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')

  const handleCountryFilter = (event) => {
    setCountryFilter(event.target.value)
  }

  const countriesToShow = countries.filter(
    country => country.name.toLowerCase().includes(countryFilter.toLowerCase()))
  
  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {setCountries(response.data)})
  }, [])
  console.log('render', countries.length, 'countries');
  console.log('To show', countriesToShow)
 
  return(
    <div>
      <CountryFilter country={countryFilter} countryHandler={handleCountryFilter}></CountryFilter>
      <div>{ (countriesToShow.length > 10 || countriesToShow.length < 1) ? "Too many matches,specify another filter": 
              (countriesToShow.length > 1) ? <CountryList countriesToShow={countriesToShow}></CountryList> :
              <Country country={countriesToShow}> </Country>
              
      }</div>
    </div>
  )
}

export default App;
