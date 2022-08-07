import { FC } from "react";
import { StyledMainLayout } from "./styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MainLayout: FC<Props> = ({ children }) => {
  return <StyledMainLayout theme="dark">{children}</StyledMainLayout>;
};

export default MainLayout;
