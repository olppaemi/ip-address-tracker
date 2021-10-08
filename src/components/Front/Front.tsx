import { useGetGeoLocationQuery } from "../../services/geoLocation";
import Header from "../Header";
import IpInfo from "../IpInfo";
import Map from "../Map";
import * as S from "./styles";

const Front = ({ ip }: { ip: string }) => {
  const { data, error, isLoading } = useGetGeoLocationQuery(ip);

  if (error) {
    return <div>Front error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const { city, timezone } = data!.location;
  const isp = data!.isp;

  return (
    <>
      <S.Container>
        <Header />
        <IpInfo ip={ip} location={city} timezone={timezone} isp={isp} />
        <Map lat={data!.location.lat} lng={data!.location.lng} />
      </S.Container>
    </>
  );
};

export default Front;
