import { StyledLink } from "components/Styles/StyledLink";
import { FC } from "react";
import { Input } from "../Input/Input";
import { SpaceX, SpaceY } from "../Input/style";
import {
  Button,
  LoginContainer,
  Text,
  TwitterIcon,
  FacebookIcon,
  GooglePlusIcon,
  SocialIconsContainer,
} from "./styles";

export const Login: FC = () => (
  <LoginContainer>
    <Input
      name="username"
      icon="/profile.svg"
      id="username"
      type="text"
      label="USER NAME"
    />
    <SpaceY />
    <Input
      type="password"
      name="password"
      icon="/lock.svg"
      id="password"
      label="PASSWORD"
    />
    <SpaceY />
    <SpaceY />
    <StyledLink href="/forgot-password">
      <Text>Forgot Password?</Text>
    </StyledLink>
    <SpaceY />
    <SpaceY />
    <StyledLink href="/login">
      <Button>Login</Button>
    </StyledLink>
    <SocialIconsContainer>
      <StyledLink href="/twitter-auth">
        <TwitterIcon src="/logo-twitter.svg" />
      </StyledLink>
      <SpaceX />
      <StyledLink href="/facebook-auth">
        <FacebookIcon src="/logo-facebook.svg" />
      </StyledLink>
      <SpaceX />
      <StyledLink href="/google-auth">
        <GooglePlusIcon src="/logo-google-plus.svg" />
      </StyledLink>
    </SocialIconsContainer>
  </LoginContainer>
);
