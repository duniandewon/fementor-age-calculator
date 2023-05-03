import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  padding: 0 0 3rem;

  @media (min-width: 750px) {
    padding: 0 0 1rem;
  }
`;

export const FormGroup = styled.fieldset`
  display: flex;
  gap: 2rem;
  border: 0;

  @media (min-width: 750px) {
    width: 95%;
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.clrPrimary};
  border: 0;
  cursor: pointer;
  bottom: -1.75rem;
  right: 50%;
  transform: translateX(50%);
  display: grid;
  place-items: center;

  & > svg {
    width: 60%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[800]};
  }

  @media (min-width: 750px) {
    right: 0;
  }
`;
