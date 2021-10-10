import L from "leaflet";
import { MapConsumer, MapContainer, Marker, TileLayer } from "react-leaflet";
import LocationIcon from "../../assets/images/icon-location.svg";
import * as S from "./styles";

const Icon = new L.Icon({ iconUrl: LocationIcon, iconSize: L.point(46, 56) });

const Map = ({ lat, lng }: { lat: number; lng: number }) => {
  return (
    <S.Container>
      <MapContainer center={[lat, lng]} zoom={16} style={{ height: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
