import { StyledLink } from "components/Styles/StyledLink";
import { FC } from "react";
import { Input } from "../Input/Input";
import { Space } from "../Input/style";
import { Button, LoginContainer, Text } from "./styles";

export const Login: FC = () => (
  <LoginContainer>
    <Input
      name="username"
      icon="/profile.svg"
      id="username"
      type="text"
      label="USER NAME"
    />
    <Space />
    <Input
      type="password"
      name="password"
      icon="/lock.svg"
      id="password"
      label="PASSWORD"
    />
    <Space />
    <Space />
    <StyledLink href="/forgot-password">
      <Text>Forgot Password?</Text>
    </StyledLink>
    <Space />
    <Space />
    <StyledLink href="/login">
      <Button>Login</Button>
    </StyledLink>
  </LoginContainer>
);
