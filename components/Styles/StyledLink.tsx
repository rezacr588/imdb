import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const StyledA = styled.a`
  padding: 0;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
`;

interface LinkProps {
  href: string;
  children?: React.ReactNode;
}

export const StyledLink: FC<LinkProps> = ({ href, children }) => (
  <Link href={href}>
    <StyledA>{children}</StyledA>
  </Link>
);
