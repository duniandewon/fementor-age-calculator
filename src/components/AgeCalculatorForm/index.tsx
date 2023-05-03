import { useFormik } from "formik";
import * as Yup from "yup";

import TextField from "../InputComponent";

import Arrow from "../../icons/arrow";

import { Button, Form, FormGroup } from "./styled";

import { useCalulateAge } from "../../hooks/useCalculateAge";

const AgeCalculatorForm = () => {
  const { calculateAge } = useCalulateAge();

  const validationSchema = Yup.object().shape({
    day: Yup.number()
      .max(31, "Must be valid day")
      .required("Should not be empty"),
    month: Yup.number()
      .max(12, "Must be valid month")
      .required("Should not be empty"),
    year: Yup.number()
      .min(1000, "Mus be valid year")
      .max(new Date().getFullYear(), "Must be in the past")
      .required("Should not be empty"),
  });

  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik<{
    day: string;
    month: string;
    year: string;
  }>({
    initialValues: {
      day: "",
      month: "",
      year: "",
    },
    onSubmit: calculateAge,
    validationSchema,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <TextField
          id="day"
          label="day"
          name="day"
          value={values.day}
          placeholder="dd"
          error={errors.day}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          id="month"
          label="month"
          name="month"
          value={values.month}
          error={errors.month}
          placeholder="mm"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
          id="year"
          label="year"
          name="year"
          value={values.year}
          error={errors.year}
          placeholder="yyyy"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button type="submit" aria-labelledby="calculate-age">
          <Arrow />
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AgeCalculatorForm;
