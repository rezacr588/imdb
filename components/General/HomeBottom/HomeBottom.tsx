/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { StyledContainer, Icon } from "./styled";

export const HomeBottom: FC = () => {
  return (
    <StyledContainer>
      <Icon src="/movies-active.svg" alt="movies-active" />
      <Icon src="/event-ticket-inactive.svg" alt="event-ticket-inactive" />
      <Icon src="/alarm-inactive.svg" alt="alarm-inactive" />
      <Icon src="/profile-inactive.svg" alt="profile-inactive" />
    </StyledContainer>
  );
};
