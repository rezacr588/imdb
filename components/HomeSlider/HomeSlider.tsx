import { movies } from "data/movies";
import Image from "next/image";
import { FC, useState } from "react";
import { MovieItemInterface } from "./interfaces";
import { MovieItems } from "./MovieItems";
import { ButtonContainer, TabButton, SliderContainer } from "./styles";

export const HomeSlider: FC = () => {
  const [type, setType] = useState<"now-showing" | "coming-soon">(
    "now-showing",
  );
  const [data] = useState<MovieItemInterface[]>(movies);

  return (
    <SliderContainer>
      <ButtonContainer>
        <TabButton
          active={type === "now-showing" ? true : false}
          onClick={() => setType("now-showing")}
        >
          <Image alt="search-icon" width={18} height={18} src="/play.svg" />
          <span style={{ paddingRight: 5 }} />
          Now Showing
        </TabButton>
        <TabButton
          active={type === "coming-soon" ? true : false}
          onClick={() => setType("coming-soon")}
        >
          Coming Soon
        </TabButton>
      </ButtonContainer>
      <MovieItems data={data} />
    </SliderContainer>
  );
};
