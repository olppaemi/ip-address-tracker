import L from "leaflet";
import { MapConsumer, MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationIcon from "../../assets/images/icon-location.svg";
import * as S from "./styles";

const Icon = new L.Icon({ iconUrl: LocationIcon, iconSize: L.point(46, 56) });

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  const url = `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`;
  return (
    <S.Container>
      <MapContainer center={[lat, lng]} zoom={16} style={{ height: "100%" }}>
        <TileLayer
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
          url={url}
          maxZoom={18}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
        />
        <Marker position={[lat, lng]} icon={Icon} />
        <MapConsumer>
          {(map) => {
            map.panTo([lat, lng]);
            return null;
          }}
        </MapConsumer>
      </MapContainer>
    </S.Container>
  );
};

export default Map;
