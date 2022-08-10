import styled from "styled-components";

export const StyledContainer = styled.div`
  border-top: 1px solid #2b3543;
  margin-top: 1.25rem;
  width: 100%;
`;

export const NotificationContainer = styled.div`
  border-bottom: 2px dashed #2b3543;
  display: grid;
  grid-template-columns: 1fr 4fr;
  padding: 1rem 0;
`;

export const StyledContent = styled.h2`
  font-size: 14px;
  line-height: 20px;
  padding: 4px;
  color: #ffffff;
  margin: 0;
`;

export const Extra = styled.h3`
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
  margin: 0;
  padding: 0;
  opacity: 0.5;
`;

export const StyledIconContainer = styled.div<{ type: string }>`
  display: grid;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    opacity: 0.2;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${(p) => {
      if (p.type === "congrats") {
        return "#4CD964;";
      }
      if (p.type === "reminder") {
        return "#FF4762";
      }
      if (p.type === "money") {
        return "#D9D34C";
      }
      if (p.type === "discount") {
        return "#47CFFF";
      }
      return "none";
    }};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
