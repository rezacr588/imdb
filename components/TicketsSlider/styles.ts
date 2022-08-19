import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    margin-top: 3rem;
    opacity: 0.8;
    transform: scale(0.9);
  }

  to {
    margin-top: 0rem;
    opacity: 1;
    transform: scale(1);
  }
`;

export const TicketWrapper = styled.div`
  max-width: 324px;
  border-radius: 8px;
  display: grid;
  overflow: hidden;
  margin: auto;
  transition: all 2s;
  position: absolute;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

export const SubTitle = styled.h3`
  font-size: 12px;
  padding: 0;
  margin: 0;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  margin-top: 4px;
`;

export const SubTitleContent = styled.h4`
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  margin: 0;
  padding: 0;
`;

export const DetailsWrapper = styled.div`
  display: grid;
  padding: 24px;
  grid-template-columns: repeat(2, 1fr);
  background: #2b3543;
`;

export const Row = styled.div`
  display: flex;
`;

export const WholeRow = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const StyledDetail = styled.div`
  margin-top: 1rem;
`;

export const ParWrapper = styled.div`
  background: #ffffff;
  padding: 1rem 40px;
`;

export const Text = styled.p`
  font-size: 14px;
  padding: 0;
  margin: 0;
  line-height: 18px;
  text-transform: uppercase;
  color: #0f1b2b;
`;

export const ParDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTicketsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  & > div:first-child {
    opacity: 1;
    z-index: 3;
    top: 0;
    transform: scale(1);
  }
  & > div:nth-child(2) {
    opacity: 0.7;
    top: 40px;
    z-index: 2;
    transform: scale(0.9);
  }
  & > div:nth-child(3) {
    z-index: 1;
    top: 80px;
    transform: scale(0.8);
    opacity: 0.3;
  }
`;
