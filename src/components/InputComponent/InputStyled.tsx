import styled from "styled-components";

interface Prop {
  error?: boolean;
}

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: 0.8rem;
`;

export const Label = styled.label<Prop>`
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme, error }) =>
    error ? theme.colors.clrError : theme.colors.neutral[500]};
  margin: 0 0 0.5rem;
`;

export const Input = styled.input<Prop>`
  text-transform: uppercase;
  width: 100%;
  border: 1px solid
    ${({ theme, error }) =>
      error ? theme.colors.clrError : theme.colors.neutral[400]};
  padding: 0.8rem 1rem;
  font-size: 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;

  &:placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.clrError};
  margin: 0.4rem 0 0;
  font-size: 0.7rem;
`;
