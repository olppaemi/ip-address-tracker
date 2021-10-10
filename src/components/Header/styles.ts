import styled from "styled-components";
import bg from "../../assets/images/pattern-bg.png";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Header = styled.header`
  width: 100%;
  height: 35%;
  background: center / cover no-repeat url(${bg});
  display: flex;
  justify-content: center;

  @media (max-width: ${media.md}) {
    height: ${(300 / 828) * 100}%;
  }
`;

export const Wrapper = styled.div`
  width: ${rem(555)};
  margin-top: ${rem(33)};

  @media (max-width: ${media.md}) {
    width: ${(327 / 375) * 100}%;
  }
`;

export const Title = styled.h1`
  font-size: ${rem(32)};
  font-weight: 500;
  letter-spacing: -${rem(0.29)};
  color: white;
  text-align: center;
  margin-bottom: ${rem(32)};

  @media (max-width: ${media.lg}) {
    font-size: ${rem(26)};
  }
`;

export const Form = styled.form`
  width: 100%;
  height: ${rem(58)};
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  padding: ${rem(18)} ${rem(24)};
  border: none;
  outline: none;
  border-top-left-radius: ${rem(15)};
  border-bottom-left-radius: ${rem(15)};

  font-size: ${rem(18)};
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) => theme.palette.mountainMist};
  }

  @media (max-width: ${media.lg}) {
    font-size: ${rem(12)};
  }
`;

export const Submit = styled.button`
  width: ${rem(58)};
  appearance: none;
  border: none;
  outline: none;
  border-top-right-radius: ${rem(15)};
  border-bottom-right-radius: ${rem(15)};
  background-color: black;
`;
