import styled from "styled-components";

interface StyledProps {
  theme: "dark" | "white";
}

export const StyledMainLayout = styled.main<StyledProps>`
  background: ${(p) => (p.theme === "dark" ? "#0F1B2B" : "#fff")};
  width: 100vw;
  padding-top: 35px;
  padding-bottom: 49px;
`;
