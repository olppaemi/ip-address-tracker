import styled from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Container = styled.div`
  height: ${rem(161)};
  position: fixed;
  top: 25%;
  left: 11.45%;
  right: 11.45%;
  z-index: 100;
  background-color: white;
  border-radius: ${rem(15)};
  display: flex;
  align-items: center;

  & > * + * {
    border-left: 1px solid hsla(0, 0%, 59%, 0.15);
  }

  @media (max-width: ${media.md}) {
    flex-direction: column;
    height: ${rem(294)};
    left: 6.4%;
    right: 6.4%;
    justify-content: space-between;
    padding: ${rem(24)};

    & > * + * {
      border-left: 0;
    }
  }
`;

export const Info = styled.h2`
  font-size: ${rem(26)};
  width: 25%;
  height: ${rem(56)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${rem(32)};

  @media (max-width: ${media.lg}) {
    width: 100%;
    font-size: ${rem(20)};
    padding: 0;
    align-items: center;
  }
`;

export const Name = styled.small`
  display: inline-block;
  font-size: ${rem(12)};
  letter-spacing: ${rem(1.75)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.mountainMist};
  margin-bottom: ${rem(12)};

  @media (max-width: ${media.lg}) {
    font-size: ${rem(10)};
    margin-bottom: ${rem(7)};
  }
`;
