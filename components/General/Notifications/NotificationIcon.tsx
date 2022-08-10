import Image from "next/image";
import { FC } from "react";
import { StyledIconContainer } from "./styles";

const getIconFromPublic = (t: string) => {
  if (t === "congrats") {
    return "like";
  }
  if (t === "reminder") {
    return "notification";
  }
  if (t === "money") {
    return "dollar";
  }
  if (t === "discount") {
    return "percentage";
  }
};

export const NotificationIcon: FC<{ type: string }> = ({ type }) => {
  return (
    <StyledIconContainer type={type}>
      <Image
        width="18px"
        height="18px"
        src={`/${getIconFromPublic(type)}.svg`}
        alt={type}
      />
    </StyledIconContainer>
  );
};
