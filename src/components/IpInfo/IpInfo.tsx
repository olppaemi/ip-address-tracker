import * as S from "./styles";

const IpInfo = ({
  ip,
  region,
  city,
  postalCode,
  timezone,
  isp,
}: {
  ip?: string;
  region?: string;
  city?: string;
  postalCode?: string;
  timezone?: string;
  isp?: string;
}) => {
  return (
    <S.Container>
      <S.Info>
        <S.Name>IP Address</S.Name>
        {ip}
      </S.Info>
      <S.Info>
        <S.Name>Location</S.Name>
        {city}, {region} {postalCode}
      </S.Info>
      <S.Info>
        <S.Name>Timezone</S.Name>
        UTC {timezone}
      </S.Info>
      <S.Info>
        <S.Name>ISP</S.Name>
        {isp}
      </S.Info>
    </S.Container>
  );
};

export default IpInfo;
