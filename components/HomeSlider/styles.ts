import styled from "styled-components";

export const ButtonContainer = styled.div`
  border: 1px solid #2c3f5b;
  border-radius: 20px;
  padding: 4px;
  margin: 1rem;
  display: flex;
  justify-content: baseline;
  align-items: center;
`;

export const Button = styled.button<{ active: boolean }>`
  border-radius: 16px;
  color: #fff;
  border: none;
  padding: 0;
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  cursor: pointer;
  height: 32px;
  outline: inherit;
  background: ${(p) => (p.active ? "#D9251D" : "none")};
  width: 50%;
  opacity: ${(p) => (p.active ? 1 : 0.5)};
  font-size: 14px;
  line-height: 18px;
`;

export const SliderContainer = styled.div`
  margin-top: 1rem;
`;

export const StyledMovieItems = styled.div`
  display: grid;
  row-gap: 1.5rem;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

export const StyledTitle = styled.h3`
  font-size: 16px;
  line-height: 18px;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

export const Extra = styled.h4`
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  margin: 0;
  padding: 0;
  opacity: 0.5;
`;

export const Ellipse = styled.span`
  background-color: #fff;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  margin: 0;
  padding: 0;
  opacity: 0.3;
  margin-top: 2px;
`;

export const ExtraContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Space = styled.span`
  padding: 3px;
`;
