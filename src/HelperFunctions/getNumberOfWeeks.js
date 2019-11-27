const getNumberOfWeeks = (month, year) => {
  var firstOfMonth = new Date(year, month, 1);
  var lastOfMonth = new Date(year, month + 1, 0);

  if (firstOfMonth.getDay() === 6 && lastOfMonth.getDate() === 31) {
    return 6;
  } else if (firstOfMonth.getDay() === 0 && lastOfMonth.getDate() >= 30) {
    return 6;
  } else {
    return 5;
  }
};

export default getNumberOfWeeks;
