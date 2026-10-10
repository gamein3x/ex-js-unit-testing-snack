const { getInitials, createSlug } = require("./snacks.js");

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("mario rossi")).toBe("M.R.");
    expect(getInitials("Maria  Verdi")).toBe("M.V.");
})

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("TITOLO con maIuscole")).toBe("titolo con maiuscole")
})

