const portfolioColors = [
    "#FAEBD7",
    "#00FFFF",
    "#7FFFD4",
    "#0000FF",
    "#7FFF00",
    "#FF7F50",
    "#DC143C",
    "#00008B",
    "#006400",
    "#8B008B",
    "#FF8C00",
    "#2F4F4F"
];

export const portfolioConstruct = (portfolioData, primaryTextColor) => {
    let returnThis = [];
    portfolioData.map((prediction, index) => {
        returnThis.push({ 
            name: prediction.name, 
            accuracy: prediction.value * 100, 
            color: portfolioColors[index], 
            legendFontColor: primaryTextColor, 
            legendFontSize: 15
        });
    });
    return returnThis; 
};

export const averagesConstruct = (averagesData) => {
    console.log(averagesData);
    let labels = [];
    let data = [];
    averagesData.map((prediction, index) => {
        labels.push(prediction.name);
        data.push(prediction.value * 100)
    });
    let datasets = [{ data: data }];
    let returnThis = { labels: labels, datasets: datasets };
    return returnThis;
};