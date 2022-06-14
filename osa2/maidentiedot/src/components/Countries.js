import Country from "./Country"
import OneCountry from "./OneCountry"
import { useState } from "react"

const Countries = ({countriesToShow, setNewFilt}) => {
    
    
    if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
        return (
            <ul>
                {countriesToShow.map(country =>
                    <div>
                    <Country country={country} key={country.name.common} />
                    <button onClick={() => {setNewFilt(country.name)}}>show</button>
                    </div>
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