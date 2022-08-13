import { FC } from "react";
import { StyledDetail, SubTitle, SubTitleContent } from "./styles";

export const Detail: FC<{ title: string; time: string }> = (p) => {
  return (
    <StyledDetail>
      <SubTitle>{p.title}</SubTitle>
      <SubTitleContent>{p.time}</SubTitleContent>
    </StyledDetail>
  );
};
