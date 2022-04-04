import styled from "styled-components";

export const StyledUserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 580px;
  width: 440px;
  padding: 0px 30px 30px 30px;
`;
export const WrapperButtons = styled.div`
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
  width: 290px;
  padding: 0px 10px;
`;
