import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled.div`
  color: ${({ theme }) => theme.colors.mainWhite};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.l};
  padding: 0px 10px 0px 10px;
`;

export const StyledLogoLink = styled(Link)`
  width: 200px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainBlack};
`;
