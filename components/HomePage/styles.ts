import styled from "styled-components";

export const ButtonContainer = styled.div`
  border: 1px solid #2c3f5b;
  border-radius: 20px;
  padding: 4px;
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
