import CountryData from "../countryData/countryData";

export default function CountryDetails({ country, handleVisitedCountry, handleVisitedFlags }) {
    return (
        <div>
            <h3>CountryDetails</h3>
            <CountryData>
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            </CountryData>
        </div>
    )
}