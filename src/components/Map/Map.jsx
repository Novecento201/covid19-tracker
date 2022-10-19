import { MapContainer, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "../../util";

function Map({ countries, casesType, center, zoom }) {
  // console.log("map rendered");
  // console.log(center, casesType);

  // BUG
  // map dont center correctly and dont change the circle colors based on casestype
  // where to put key in map?

  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}
      </MapContainer>
    </div>
  );
}

export default Map;
