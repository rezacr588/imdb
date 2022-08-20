import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  filter: blur(2px);
  position: fixed;
`;

export const PlayButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  height: 56px;
  width: 56px;
  border-radius: 50%;
  position: relative;
  outline: none;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 0;
  margin-top: 1.5rem;
  border: none;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 1rem;
  align-items: center;
`;

export const LeftItem = styled.div`
  padding: 1rem;
`;
export const RightItem = styled.div`
  padding: 1rem;
`;

export const MovieMaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
