function getInitials(name){
    const firstInitial = name[0];
    const secondInitial = name.split(" ").filter(str => str !== "")[1][0];

    return `${firstInitial.toUpperCase()}.${secondInitial.toUpperCase()}.`
}

function createSlug(str) {
    return str.toLowerCase().replaceAll(" ", "-");
}

function average(arr){
    arr.forEach(num => {
        if (isNaN(num)) {
            throw new Error("Average vuole solo numeri.");
        }
    });
    const divideNum = arr.length;
    const sum = arr.reduce((num, acc) => num + acc, 0);
    return sum/divideNum;
}

module.exports = {
    getInitials,
    createSlug,
    average
};