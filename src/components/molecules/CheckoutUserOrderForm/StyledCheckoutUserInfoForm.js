import styled from "styled-components";

export const StyledCheckoutUserInfoForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 580px;
  width: 400px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.secondWhite};
`;
