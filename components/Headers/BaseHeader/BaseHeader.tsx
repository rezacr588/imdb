import { FC } from "react";
import { Container, TextLogo } from "./styles";

const BaseHeader: FC<{ title: string; right?: JSX.Element }> = ({
  title,
  right,
}) => {
  return (
    <Container>
      <TextLogo>{title}</TextLogo>
      {right}
    </Container>
  );
};

export default BaseHeader;
