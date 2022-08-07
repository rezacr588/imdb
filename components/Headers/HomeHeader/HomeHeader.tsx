import Image from "next/image";
import { FC } from "react";
import { Container, TextLogo } from "./styles";

const MainLayout: FC = () => {
  return (
    <Container>
      <TextLogo>Star Movie</TextLogo>
      <Image alt="search-icon" width={24} height={24} src="/search.svg" />
    </Container>
  );
};

export default MainLayout;
