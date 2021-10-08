import ArrowIcon from "./ArrowIcon";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Title>IP Address Tracker</S.Title>
        <S.Form>
          <S.Input
            type="text"
            placeholder="Search for any IP address or domain"
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
