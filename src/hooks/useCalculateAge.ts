import { useState } from "react";

export const useCalulateAge = () => {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const calculateAge = ({
    day: Day,
    month: Month,
    year: Year,
  }: {
    day: string;
    month: string;
    year: string;
  }) => {
    const today = new Date();

    const date = new Date(`${Month}/${Day}/${Year}`);

    const birthDate = date.getDate();
    const birthMonth = date.getMonth() + 1;
    const birthYear = date.getFullYear();

    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    if (
      currentYear % 4 === 0 ||
      (currentYear % 100 === 0 && currentYear % 400 === 0)
    )
      months[1] = 29;

    setYear(currentYear - birthYear);

    if (currentMonth >= birthMonth) {
      setMonth(currentMonth - birthMonth);
    } else {
      setYear((prev) => prev--);
      setMonth(12 + currentMonth - birthMonth);
    }

    if (currentDate >= birthDate) {
      setDay(currentDate - birthDate);
    } else {
      setMonth((prev) => prev--);
      setDay(months[currentMonth - 2] + currentDate - birthDate);

      if (birthMonth < 0) {
        setMonth(11);
        setYear((prev) => prev--);
      }
    }
  };

  return { day, month, year, calculateAge };
};
