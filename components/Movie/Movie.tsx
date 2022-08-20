import { MovieMask } from "components/General/MovieMask/MovieMask";
import Image from "next/image";
import { FC } from "react";
import {
  BackgroundImage,
  PlayButton,
  Header,
  LeftItem,
  RightItem,
  MovieMaskContainer,
} from "./styles";

export const Movie: FC = () => {
  return (
    <>
      <BackgroundImage>
        <Image
          src="/dark-knight-cover.jpg"
          alt="dark-knight-cover"
          layout="fill"
        />
      </BackgroundImage>
      <Header>
        <LeftItem>
          <Image src="/arrow.svg" alt="arrow" width={12} height={20} />
        </LeftItem>
        <PlayButton>
          <Image
            src="/play-movie.svg"
            alt="play-movie"
            width={40}
            height={40}
          />
        </PlayButton>
        <RightItem>
          <Image
            src="/respond-arrow.svg"
            alt="respond-arrow"
            width={24}
            height={24}
          />
        </RightItem>
      </Header>
      <MovieMaskContainer>
        <MovieMask imageSource="/dark-knight.jpg" id="dark-knight" />
      </MovieMaskContainer>
    </>
  );
};
