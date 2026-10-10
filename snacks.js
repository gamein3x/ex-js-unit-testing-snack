function getInitials(name){
    const firstInitial = name[0];
    const secondInitial = name.split(" ").filter(str => str !== "")[1][0];

    return `${firstInitial.toUpperCase()}.${secondInitial.toUpperCase()}.`
}

function createSlug(str) {
    if (!str) {
        throw new Error("Titolo non valido");
    }
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

function isPalindrome(word) {
    const invertedWord = word.split("").reverse().join("").toLowerCase();
    return word.toLowerCase() === invertedWord;
}

const postsArr = [
    { id: 1, title: "Test", slug: "test"},
    { id: 2, title: "React Hooks", slug: "react-hooks" }
]

function findPostsById(posts, id){
    if (isNaN(id)) {
        throw new Error("Id non valido");
    }
    posts.forEach(post => {
        if (post.id === undefined ||
            post.title === undefined ||
            post.slug === undefined
        ) {
            throw new Error("Format non valido");
        }
    });
    return posts.find(post => post.id === id) || null;
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostsById,
    postsArr
};