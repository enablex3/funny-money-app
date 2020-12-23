var DateDiff = require('date-diff');

export const getDiff = (date) => {
    const currentDate = new Date();
    const month = date.split("-")[0];
    const day = date.split("-")[1];
    const year = date.split("-")[2];
    const predictionDate = new Date(year, month, day);
    var diff = new DateDiff(predictionDate, currentDate);
    return diff.days().toString() + " days";
};