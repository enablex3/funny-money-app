const DateDiff = require("date-diff");

export const dateFromString = date => {
  const [month, day, year] = date.split("-").map(value => Number(value));

  return new Date(year, month - 1, day);
};

const getDiff = date => {
  const currentDate = new Date();
  const predictionDate = dateFromString(date);
  const diff = new DateDiff(predictionDate, currentDate);
  return `${diff.days().toString()} days`;
};

export default getDiff;
