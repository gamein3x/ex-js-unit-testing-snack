const { getInitials } = require("./snacks.js");

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("mario rossi")).toBe("M.R.");
    expect(getInitials("Maria  Verdi")).toBe("M.V.");
})