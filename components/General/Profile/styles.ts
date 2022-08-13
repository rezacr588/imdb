import styled from "styled-components";

export const SignUpButton = styled.button`
  font-size: 16px;
  line-height: 20px;
  border: none;
  color: #e51937;
  margin: 0;
  background: none;
  padding: 0;
`;

export const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopLine = styled.hr`
  border: 1px solid #2b3543;
  margin-bottom: 0;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  opacity: 0.5;
  padding: 0;
  margin: 0;
`;

export const Button = styled.button`
  background: #e51937;
  border-radius: 4px;
  width: inherit;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  padding: 0.8rem 0;
  border: none;
  outline: none;
  width: 324px;
  cursor: pointer;
`;

export const TwitterIcon = styled.img`
  background: #1aa9e1;
  padding: 12px;
  border-radius: 50%;
`;

export const FacebookIcon = styled.img`
  background: #3b5a9a;
  padding: 12px;
  border-radius: 50%;
`;

export const GooglePlusIcon = styled.img`
  background: #cb3e2d;
  padding: 12px;
  border-radius: 50%;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 12%;
`;
