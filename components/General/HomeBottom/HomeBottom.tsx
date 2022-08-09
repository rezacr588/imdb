/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { FC } from "react";
import { StyledContainer, Icon } from "./styled";

export const HomeBottom: FC = () => {
  const router = useRouter();

  return (
    <StyledContainer>
      <Icon
        src={`/movies-${router.pathname === "/" ? "active" : "inactive"}.svg`}
        alt="movies-active"
      />
      <Icon
        src={`/event-ticket-${
          router.pathname === "/event-ticket" ? "active" : "inactive"
        }.svg`}
        alt="event-ticket-inactive"
      />
      <Icon
        src={`/alarm-${
          router.pathname === "/notifs" ? "active" : "inactive"
        }.svg`}
        alt="alarm-inactive"
      />
      <Icon
        src={`/profile-${
          router.pathname === "/profile" ? "active" : "inactive"
        }.svg`}
        alt="profile-inactive"
      />
    </StyledContainer>
  );
};
