import styled from "styled-components";
import { media } from "../../styles/media";

export const Container = styled.div`
  width: 100%;
  height: 65%;
  position: relative;
  z-index: 50;

  @media (max-width: ${media.md}) {
    height: ${(528 / 828) * 100}%;
  }
`;
