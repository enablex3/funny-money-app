var DateDiff = require('date-diff');

export const getDiff = (date) => {
    const currentDate = new Date();
    console.log(currentDate);
    const month = Number(date.split("-")[0]);
    const day = Number(date.split("-")[1]);
    const year = Number(date.split("-")[2]);
    const predictionDate = new Date(year, day, month);
    console.log(predictionDate);
    var diff = new DateDiff(predictionDate, currentDate);
    return diff.days().toString() + " days";
};