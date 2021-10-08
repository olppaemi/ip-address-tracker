import * as S from "./styles";

const IpInfo = ({
  ip,
  location,
  timezone,
  isp,
}: {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}) => {
  return (
    <S.Container>
      <S.Info>
        <S.Name>IP Address</S.Name>
        {ip}
      </S.Info>
      <S.Info>
        <S.Name>Location</S.Name>
        {location}
      </S.Info>
      <S.Info>
        <S.Name>Timezone</S.Name>
        {timezone}
      </S.Info>
      <S.Info>
        <S.Name>ISP</S.Name>
        {isp}
      </S.Info>
    </S.Container>
  );
};

export default IpInfo;
