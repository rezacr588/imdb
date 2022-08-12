import { FC } from "react";
import { MovieItemsInterface } from "./interfaces";
import { MovieItem } from "./MovieItem";
import { StyledMovieItems } from "./styles";

export const MovieItems: FC<MovieItemsInterface> = ({ data }) => {
  return (
    <StyledMovieItems>
      {data.map((movie) => (
        <MovieItem key={movie.id} data={movie} />
      ))}
    </StyledMovieItems>
  );
};
