import { FC } from "react";
import { StyledMovieLayout } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MovieLayout: FC<Props> = ({ children }) => {
  return <StyledMovieLayout theme="dark">{children}</StyledMovieLayout>;
};

export default MovieLayout;
