import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 330px;
  width: 400px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.secondWhite};
  /* box-shadow: 0px 0px 2px rgb(0 0 0 / 40%); */
  box-shadow: 1px 2px 6px -1px rgb(0 0 0 / 35%);
`;

export const WrapperLoginForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const StyledLink = styled(Link)`
  padding-top: 10px;
  /* text-decoration: none; */
  color: ${({ theme }) => theme.colors.mainBlack};
`;
