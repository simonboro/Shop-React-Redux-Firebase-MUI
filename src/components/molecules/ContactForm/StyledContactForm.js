import styled from "styled-components";

export const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 550px;
  width: 400px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.secondWhite};
  box-shadow: 1px 2px 6px -1px rgb(0 0 0 / 35%);
`;

export const WrapperContactForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
