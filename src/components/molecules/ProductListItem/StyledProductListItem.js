import styled from "styled-components";

export const StyledProductListItem = styled.div`
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
  width: 300px;
  margin: 0px 10px 20px 10px;
  box-shadow: 1px 2px 6px -1px rgb(0 0 0 / 35%);
`;

export const WrapperProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;

export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 10px;
`;
