import { TopLine } from "components/General/Profile/styles";
import { FC } from "react";
import { Container, HeaderContainer, TextLogo } from "./styles";

const BaseHeader: FC<{ title: string; right?: JSX.Element }> = ({
  title,
  right,
}) => {
  return (
    <HeaderContainer>
      <Container>
        <TextLogo>{title}</TextLogo>
        {right}
      </Container>
      <TopLine />
    </HeaderContainer>
  );
};

export default BaseHeader;
