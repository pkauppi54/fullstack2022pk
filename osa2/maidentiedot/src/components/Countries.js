import Country from "./Country"
import OneCountry from "./OneCountry"

const Countries = ({countriesToShow}) => {
    if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
        return (
            <ul>
                {countriesToShow.map(country =>
                    <Country country={country} key={country.name.common} /> 
                    )}
                    
            </ul>
        )
    } 
    if (countriesToShow.length > 10) {
        return (
            <p>Too many options, please narrow your search</p>
        )
    }
    if (countriesToShow.length === 1) {
        return (
            <OneCountry countriesToShow={countriesToShow}/>
        )
    }
    
    
    
}

export default Countries