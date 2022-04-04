import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLinkItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainBlack};
`;