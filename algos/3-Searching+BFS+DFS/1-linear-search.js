// linear search
// Time complexity: O(n)
// Space complexity: O(1)
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
console.log(
  "linearSearch([8, 5, 2, 9, 5, 6, 3], 5) :>> ",
  linearSearch([8, 5, 2, 9, 5, 6, 3], 5)
);
console.log(
  "linearSearch([8, 5, 2, 9, 5, 6, 3], 10) :>> ",
  linearSearch([8, 5, 2, 9, 5, 6, 3], 10)
);

const beasts = [
  "Centaur",
  "Godzilla",
  "Mosura",
  "Minotaur",
  "Hydra",
  "Nessie",
  "Kraken",
  "Cerberus",
  "Manticore",
  "Simurgh",
  "Basilisk",
  "Ogre",
  "Sphinx",
  "Mummy",
];
console.log(
  "linearSearch(beasts, 'Godzilla') :>> ",
  linearSearch(beasts, "Godzilla")
);

console.log(
  "linearSearch(beasts, 'Minotaur') :>> ",
  linearSearch(beasts, "Minotaur")
);
