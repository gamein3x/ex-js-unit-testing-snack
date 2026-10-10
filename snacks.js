function getInitials(name){
    const firstInitial = name[0];
    const secondInitial = name.split(" ").filter(str => str !== "")[1][0];

    return `${firstInitial.toUpperCase()}.${secondInitial.toUpperCase()}.`
}

module.exports = {
    getInitials
};