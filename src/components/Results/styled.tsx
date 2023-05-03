import styled from "styled-components";

export const Container = styled.article`
  padding: 3rem 0 0;

  @media (min-width: 750px) {
    padding: 1.5rem 0 0;
  }
`;

export const Display = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.extraBoldItalic};
  font-size: 3.5rem;
  line-height: 1.1;

  & > span:first-child {
    color: ${({ theme }) => theme.colors.clrPrimary};
  }

  @media (min-width: 750px) {
    font-size: 5rem
  }
`;
