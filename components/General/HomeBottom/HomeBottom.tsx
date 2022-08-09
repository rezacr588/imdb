/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { StyledContainer, IconContainer } from "./styled";

export const HomeBottom: FC = () => {
  const router = useRouter();

  return (
    <StyledContainer>
      <Link href={`/`}>
        <IconContainer>
          <img
            src={`/movies-${
              router.pathname === "/" ? "active" : "inactive"
            }.svg`}
            alt="movies-active"
          />
        </IconContainer>
      </Link>
      <Link href={`/event-ticket`}>
        <IconContainer>
          <img
            src={`/event-ticket-${
              router.pathname === "/event-ticket" ? "active" : "inactive"
            }.svg`}
            alt="event-ticket-inactive"
          />
        </IconContainer>
      </Link>
      <Link href={`/notifs`}>
        <IconContainer>
          <img
            src={`/alarm-${
              router.pathname === "/notifs" ? "active" : "inactive"
            }.svg`}
            alt="alarm-inactive"
          />
        </IconContainer>
      </Link>
      <Link href="profile">
        <IconContainer>
          <img
            src={`/profile-${
              router.pathname === "/profile" ? "active" : "inactive"
            }.svg`}
            alt="profile-inactive"
          />
        </IconContainer>
      </Link>
    </StyledContainer>
  );
};
