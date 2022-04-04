import styled from "styled-components";

export const StyledRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 580px;
  width: 400px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.secondWhite};
  box-shadow: 1px 2px 6px -1px rgb(0 0 0 / 35%);
`;

export const WrapperRegisterForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
