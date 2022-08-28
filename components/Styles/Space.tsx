import { FC } from "react";
import styled from "styled-components";

interface SpaceInterface {
  ory: "X" | "Y";
  size: number;
}

const StyledSpace = styled.span<SpaceInterface>`
  ${(p) =>
    p.ory === "X" ? `padding-left: ${p.size}px` : `padding-top: ${p.size}px`}
`;

export const Space: FC<SpaceInterface> = (p) => <StyledSpace {...p} />;
