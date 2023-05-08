import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./components/GlobalStyle";

import AgeCalculatorForm from "./components/AgeCalculatorForm";

import theme from "./theme";
import Results from "./components/Results";

import CalculateAgeProvider from "./context/calculateAgeContext";



const Container = styled.main`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  padding: 3rem 2rem 2rem;
  border-radius: 20px 20px 90px 20px;
  width: 90%;
  max-width: 750px;
  margin: 0 auto;

  @media (min-width: 750px) {
    padding: 2rem 3rem;
  }
`;

function App() {
  return (
    <CalculateAgeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <AgeCalculatorForm />
          <Results />
        </Container>
      </ThemeProvider>
    </CalculateAgeProvider>
  );
}

export default App;
