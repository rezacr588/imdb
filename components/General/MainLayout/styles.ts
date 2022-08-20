import styled from "styled-components";

interface StyledProps {
  theme: "dark" | "white";
}

export const StyledMainLayout = styled.main<StyledProps>`
  background: ${(p) => (p.theme === "dark" ? "#0F1B2B" : "#fff")};
  padding-top: 49px;
  padding-bottom: 49px;
`;

export const StyledMovieLayout = styled.main<StyledProps>`
  background: ${(p) => (p.theme === "dark" ? "#0F1B2B" : "#fff")};
`;
