import "./table.css";
import millify from "millify";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map((country) => (
        <div key={country.country} className="country_info">
          <div className="country_img-name">
            <img src={country.countryInfo.flag} />
            <strong>{country.country}</strong>
          </div>
          <div>
            <strong className="country_numbers">
              {millify(country.cases)}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
