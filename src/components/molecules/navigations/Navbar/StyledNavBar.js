import styled from "styled-components";

export const StyledNavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.mainBlack};
`;

export const StyledMenuList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  display: grid;
  grid-template-columns: 0.6fr 0.6fr 0.6fr;
`;

export const StyledIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
