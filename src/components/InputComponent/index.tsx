import { ChangeEvent, FocusEvent } from "react";

import { Container, Error, Input, Label } from "./InputStyled";

interface Props {
  id: string;
  label: string;
  name: string;
  value?: string | number | readonly string[];
  placeholder?: string;
  error?: { message: string | undefined; touched: boolean | undefined };
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const TextField = ({
  id,
  label,
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
}: Props) => {
  return (
    <Container>
      <Label htmlFor={id} error={!!error?.message && error?.touched}>
        {label}
      </Label>
      <Input
        id={id}
        name={name}
        value={value}
        error={!!error?.message && error?.touched}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error?.message && error.touched && <Error>{error.message}</Error>}
    </Container>
  );
};

export default TextField;
