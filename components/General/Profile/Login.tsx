import { FC } from "react";
import { Input } from "../Input/Input";
import { Space } from "../Input/style";
import { LoginContainer } from "./styles";

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
  </LoginContainer>
);
