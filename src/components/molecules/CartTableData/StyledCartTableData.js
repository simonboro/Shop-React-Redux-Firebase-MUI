import styled from "styled-components";

export const StyledTotalCost = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.sx};
`;
