import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  position: fixed;
  grid-template-columns: 25% 25% 25% 25%;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  height: 49px;
  align-items: center;
  background-color: #0f1b2b;
  justify-content: center;
  @media (min-width: 601px) {
    display: none;
  }
`;

export const IconContainer = styled.a`
  justify-self: center;
`;
