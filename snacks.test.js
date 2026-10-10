const { } = require("./snacks.test.js");

function getInitials(name){
    const firstInitial = name[0];
    const secondInitial = name.split(" ")[1][0];

    return `${firstInitial}.${secondInitial}.`
}

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
})