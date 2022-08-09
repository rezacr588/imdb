import styled from "styled-components";

interface StyledProps {
  theme: "dark" | "white";
}

export const StyledMainLayout = styled.main<StyledProps>`
  background: ${(p) => (p.theme === "dark" ? "#000" : "#fff")};
  width: 100vw;
  min-height: 100vh;
  padding: 2% 2%;
  padding-top: 35px;
  padding-bottom: 49px;
`;
