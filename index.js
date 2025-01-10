// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat() {
    const Broom = [...cats, "Broom"];
    return (Broom);
}

function prependCat() {
    const Arnold = ["Arnold", ...cats];
    return Arnold;
}

function removeLastCat() {
    return cats.slice(0,-1);
}

function removeFirstCat() {
    return cats.slice(1);
}