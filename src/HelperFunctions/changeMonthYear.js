const changeMonthYear = (year, month, action) => {
  let yearOut = year;
  let monthOut = month;

  switch (action) {
    case "MONTH_BACK":
      monthOut = month - 1;
      if (monthOut < 0) {
        monthOut += 12;
        yearOut = year - 1;
      }
      break;
    case "MONTH_FORWARD":
      monthOut = month + 1;
      if (monthOut > 11) {
        monthOut -= 12;
        yearOut = year + 1;
      }
      break;
    default:
      yearOut = year;
      monthOut = month;
      break;
  }

  return [yearOut, monthOut];
};

export default changeMonthYear;
