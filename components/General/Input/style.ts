import styled from "styled-components";

export const BaseInput = styled.input`
  background: #2b3543;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  font-size: 14px;
  color: #ffffff;
  width: 270px;
  outline: none;
  padding-left: 46px;
  height: 44px;
  border: none;
  color-scheme: dark;
`;

export const BaseInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BaseLabel = styled.label`
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
  opacity: 0.5;
  margin-bottom: 8px;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
`;

export const WithIcon = styled.div`
  position: relative;
`;

export const Space = styled.div`
  padding-top: 1rem;
`;
