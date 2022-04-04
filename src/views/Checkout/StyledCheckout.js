import styled from "styled-components";

export const WrapperCheckoutForm = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.mainWhite};
`;

export const WrapperPaymentAndDelivery = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperNoItemsInCart = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 70px;
  justify-content: space-between;
`;

export const WrapperCartWithItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;
