import { FC } from "react";
import { StyledDetail, SubTitle, SubTitleContent } from "./styles";

interface DetailInterface {
  title: string;
  value: string;
}

export const Detail: FC<DetailInterface> = (p) => {
  return (
    <StyledDetail>
      <SubTitle>{p.title}</SubTitle>
      <SubTitleContent>{p.value}</SubTitleContent>
    </StyledDetail>
  );
};
