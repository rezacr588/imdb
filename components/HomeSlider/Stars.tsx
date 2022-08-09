/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

function hasDecimal(num: number): boolean {
  return !!(num % 1);
}

function getWholeNumber(num: number): number {
  return Math.floor(num);
}

function getArray(num: number): number[] {
  return [...Array(num)];
}

export const Stars: FC<{ rating: number }> = ({ rating }) => {
  const wholeNum = getWholeNumber(rating);

  const FullStar = <img src="/filled-star.svg" alt="filled-star" />;
  const HalfStar = <img src="/half-star.svg" alt="half-star" />;
  const EmptyStar = <img src="/empty-star.svg" alt="empty-star" />;

  return (
    <div>
      {getArray(wholeNum).map((i) => FullStar)}
      {hasDecimal(rating) && HalfStar}
      {getWholeNumber(10 - rating) > 0 &&
        getArray(getWholeNumber(10 - rating)).map((i) => EmptyStar)}
    </div>
  );
};
