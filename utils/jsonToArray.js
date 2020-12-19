export const jsonToArray = (jsonObject) => {
    const returnThis = [];
    Object.keys(jsonObject).forEach(key => returnThis.push({ name: key, value: jsonObject[key]}));
    return returnThis;
}