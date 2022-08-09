import { movies } from "data/movies";
import Image from "next/image";
import { FC, useState } from "react";
import { MovieItemInterface } from "./interfaces";
import { MovieItem } from "./MovieItem";
import {
  ButtonContainer,
  Button,
  SliderContainer,
  StyledMovieItems,
} from "./styles";

export const HomeSlider: FC = () => {
  const [type, setType] = useState<"now-showing" | "coming-soon">(
    "now-showing",
  );
  const [data, setData] = useState<[MovieItemInterface]>(movies);

  return (
    <SliderContainer>
      <ButtonContainer>
        <Button
          active={type === "now-showing" ? true : false}
          onClick={() => setType("now-showing")}
        >
          <Image alt="search-icon" width={18} height={18} src="/play.svg" />
          <span style={{ paddingRight: 5 }} />
          Now Showing
        </Button>
        <Button
          active={type === "coming-soon" ? true : false}
          onClick={() => setType("coming-soon")}
        >
          Coming Soon
        </Button>
      </ButtonContainer>
      <StyledMovieItems>
        {data.map((movie) => (
          <MovieItem key={movie.id} data={movie} />
        ))}
      </StyledMovieItems>
    </SliderContainer>
  );
};
