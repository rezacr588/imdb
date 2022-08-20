import Image from "next/image";
import { FC } from "react";
export const MovieMask: FC<{ imageSource: string; id: string }> = ({
  imageSource,
  id,
}) => {
  return <Image alt={id} src={imageSource} width={164} height={250} />;
};
