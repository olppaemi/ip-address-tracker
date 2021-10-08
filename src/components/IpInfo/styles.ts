import styled from "styled-components";
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
`;

export const Info = styled.h2`
  font-size: ${rem(26)};
  width: 25%;
  height: ${rem(56)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 ${rem(32)};
`;

export const Name = styled.small`
  display: inline-block;
  font-size: ${rem(12)};
  letter-spacing: ${rem(1.75)};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.mountainMist};
  margin-bottom: ${rem(12)};
`;
