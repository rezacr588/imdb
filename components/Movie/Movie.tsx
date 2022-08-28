import { MovieMask } from "components/General/MovieMask/MovieMask";
import { BigSpanTexy, H1Title, SubTitle } from "components/General/Text/styles";
import { Stars } from "components/HomeSlider/Stars";
import { Space } from "components/Styles/Space";
import { Row } from "components/TicketsSlider/styles";
import Image from "next/image";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const back = () => router.back();
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
          <Image
            onClick={back}
            src="/arrow.svg"
            alt="arrow"
            width={12}
            height={20}
          />
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
        <Space ory="Y" size={32} />
        <H1Title>Batman: Dark knight</H1Title>
        <Space ory="Y" size={16} />
        <SubTitle>2hr 10m | R</SubTitle> <Space ory="Y" size={9} />
        <SubTitle>Action, Crime, Thriller</SubTitle>
        <Space ory="Y" size={29} />
        <Row>
          <BigSpanTexy>4.6/5</BigSpanTexy>
          <Stars scale={2} rating={4.6} />
        </Row>
      </MovieMaskContainer>
    </>
  );
};
