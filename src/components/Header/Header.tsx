import { FormEvent, useState } from "react";
import ArrowIcon from "./ArrowIcon";
import * as S from "./styles";

const Header = ({ onSubmit }: { onSubmit: Function }) => {
  const [ip, setIp] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(ip);
  };

  return (
    <S.Header>
      <S.Wrapper>
        <S.Title>IP Address Tracker</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="text"
            placeholder="Search for any IP address or domain"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <S.Submit type="submit">
            <ArrowIcon />
          </S.Submit>
        </S.Form>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
