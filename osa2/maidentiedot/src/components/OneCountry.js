
const OneCountry = ({countriesToShow}) => {
    const country = countriesToShow[0]
    console.log()
    const lan = Object.values(country.languages) // palauttaa listan maan kielistä
    

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>
                capital {country.capital} <br/>
                area {country.area}
            </p>
            <h3>languages</h3>
                <ul>
                    {lan.map(language => 
                        <li key ={language} >{language}</li>)}
                </ul>
            <img src={country.flags.png} />
        </div>
    )
}

export default OneCountry