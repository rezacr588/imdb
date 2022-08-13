import styled from "styled-components";

export const TicketWrapper = styled.div`
  max-width: 324px;
  border-radius: 8px;
  display: grid;
  overflow: hidden;
  margin: auto;
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
