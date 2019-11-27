const getFirstLastDay = (month, year) => {
  let firstDay = new Date(year, month, 1).getDay();
  let lastDay = new Date(year, month + 1, 0).getDay();
  return [firstDay, lastDay];
};

export default getFirstLastDay;
