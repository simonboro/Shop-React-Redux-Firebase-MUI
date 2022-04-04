import styled, { css } from "styled-components";

export const StyledP = styled.p`
  ${({ footer }) =>
    footer &&
    css`
      font-size: ${({ theme }) => theme.fontSizes.xs};
      font-weight: ${({ theme }) => theme.fontWeight.light};
    `}
`;
