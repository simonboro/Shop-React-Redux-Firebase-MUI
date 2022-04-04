import styled from "styled-components";

export const WrapperUserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;
