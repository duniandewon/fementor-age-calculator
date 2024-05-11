import { Container, Display } from "./styled";

import useCalulateAge from "../../hooks/useCalculateAge";

const Results = () => {
  const { day, month, year } = useCalulateAge();

  return (
    <Container>
      <Display>
        <span>{year || "- -"}</span> <span>years</span>
      </Display>
      <Display>
        <span>{month || "- -"}</span> <span>months</span>
      </Display>
      <Display>
        <span>{day || "- -"}</span> <span>days</span>
      </Display>
    </Container>
  );
};

export default Results;
