import { useContext } from "react";
import {
  CalculateAgeContext,
  ICalculateAgeContext,
} from "../context/calculateAgeContext";

const useCalulateAge = () =>
  useContext(CalculateAgeContext) as ICalculateAgeContext;

export default useCalulateAge;
