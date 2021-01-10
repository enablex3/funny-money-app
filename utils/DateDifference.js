const DateDiff = require("date-diff");

const getDiff = date => {
  const currentDate = new Date();
  const [month, day, year] = date.split("-").map(value => Number(value));
  const predictionDate = new Date(year, month - 1, day);
  const diff = new DateDiff(predictionDate, currentDate);
  return `${diff.days().toString()} days`;
};

export default getDiff;
