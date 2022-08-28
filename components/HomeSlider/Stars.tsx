/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { StarImage } from "./styles";

function hasDecimal(num: number): boolean {
  return !!(num % 1);
}

function getWholeNumber(num: number): number {
  return Math.floor(num);
}

function getArray(num: number): number[] {
  return [...Array(num)];
}

export const Stars: FC<{ rating: number; scale: number }> = ({
  rating,
  scale,
}) => {
  const wholeNum = getWholeNumber(rating);

  const FullStar = (
    <StarImage scale={scale} src="/filled-star.svg" alt="filled-star" />
  );
  const HalfStar = (
    <StarImage scale={scale} src="/half-star.svg" alt="half-star" />
  );
  const EmptyStar = (
    <StarImage scale={scale} src="/empty-star.svg" alt="empty-star" />
  );

  return (
    <div>
      {getArray(wholeNum).map((i) => FullStar)}
      {hasDecimal(rating) && HalfStar}
      {getWholeNumber(5 - rating) > 0 &&
        getArray(getWholeNumber(5 - rating)).map((i) => EmptyStar)}
    </div>
  );
};
