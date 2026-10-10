const { getInitials, createSlug, average, isPalindrome, findPostsById } = require("./snacks.js");

test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("mario rossi")).toBe("M.R.");
    expect(getInitials("Maria  Verdi")).toBe("M.V.");
})

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("TITOLO con maIuscole")).toBe("titolo-con-maiuscole")
})

test("La funzione average fa una media aritmetica di un array di numeri.", () => {
    expect(average([5, 5, 5])).toBe(5);
    expect(average([8, 2])).toBe(5);
    expect(() => average([5, "h"])).toThrow();
})

test("La funzione createSlug restituisce gli spazi come trattini '-'.", () => {
    expect(createSlug("TITOLO molto bello")).toBe("titolo-molto-bello");
})

test("La funzione isPalindrome verifica se una stringa sia palindromo o meno", () => {
    expect(isPalindrome("Anna")).toBeTruthy();
    expect(isPalindrome("carlo")).toBeFalsy();
})

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow("Titolo non valido");
    expect(() => createSlug(null)).toThrow("Titolo non valido");
})

test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
    expect(findPostsById(postsArr, 2)).toEqual({ id: 2, title: "React Hooks", slug: "react-hooks" });
    expect(findPostsById(postsArr, 3)).toBe(null);
    expect(() => findPostsById(postsArr, "ciao")).toThrow("Id non valido");
    expect(() => findPostsById([34, 67], 2)).toThrow("Format non valido");
})