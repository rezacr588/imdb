/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { MovieItemInterface } from "./interfaces";
import { Stars } from "./Stars";
import { Ellipse, Extra, StyledTitle, ExtraContainer, Space } from "./styles";

interface Props {
  data: MovieItemInterface;
}

function hourToMinutes(n: number): {
  rhours: number;
  rminutes: number;
} {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return {
    rhours,
    rminutes,
  };
}

function toReadableText(hour: number, min: number): string {
  if (hour === 0) {
    return ` ${min}m `;
  }
  if (min === 0) {
    return ` ${hour}hr `;
  }
  return ` ${hour}hr ${min}m `;
}

export const MovieItem: FC<Props> = ({ data }) => {
  const { rhours, rminutes } = hourToMinutes(data.time);

  const time = toReadableText(rhours, rminutes);

  return (
    <div>
      <img alt={data.id} src={data.imageSource} height={250} width="100%" />
      <StyledTitle>{data.title}</StyledTitle>
      <Stars rating={data.rating} />
      <ExtraContainer>
        <Extra>{data.genre}</Extra> <Space />
        <Ellipse /> <Space />
        <Extra>
          {time} | {data.age}
        </Extra>
      </ExtraContainer>
    </div>
  );
};
