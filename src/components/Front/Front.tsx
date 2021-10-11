import { useEffect, useState } from "react";
import { getIpGeoLocationInfo, getVisitorIP } from "../../services/api";
import { IpGeoLocationInfoType } from "../../types";
import Header from "../Header";
import IpInfo from "../IpInfo";
import Map from "../Map";
import * as S from "./styles";

const Front = () => {
  const [visitorIp, setVisitorIp] = useState("");
  const [ipGeoInfo, setIpGeoInfo] = useState<IpGeoLocationInfoType | null>(
    null
  );

  useEffect(() => {
    async function getIp() {
      const ip = await getVisitorIP();
      setVisitorIp(ip);
      const geo = await getIpGeoLocationInfo(visitorIp);
      setIpGeoInfo(geo);
    }
    getIp();
  }, [visitorIp]);

  async function handleSubmit(ip: string) {
    const data = await getIpGeoLocationInfo(ip);
    setIpGeoInfo(data);
  }

  if (!visitorIp || !ipGeoInfo) {
    <div>Loading...</div>;
  }

  return (
    <S.Container>
      <Header onSubmit={handleSubmit} />
      <IpInfo
        ip={ipGeoInfo?.ip}
        city={ipGeoInfo?.location.city}
        region={ipGeoInfo?.location.region}
        postalCode={ipGeoInfo?.location.postalCode}
        timezone={ipGeoInfo?.location.timezone}
        isp={ipGeoInfo?.isp}
      />
      {ipGeoInfo?.location && (
        <Map lat={ipGeoInfo.location.lat} lng={ipGeoInfo.location.lng} />
      )}
    </S.Container>
  );
};

export default Front;
