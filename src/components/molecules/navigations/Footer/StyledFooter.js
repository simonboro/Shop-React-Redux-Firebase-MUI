import styled from "styled-components";

export const StyledFooter = styled.footer`
  color: ${({ theme }) => theme.colors.mainWhite};
  background-color: ${({ theme }) => theme.colors.secondGray};
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 140px;
  justify-content: space-around;
  height: 120px;
`;
