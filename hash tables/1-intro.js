// Key value pairs

// Java: maps
// Python: dictionaries
// javascfipt: object
// Ruby: hashes

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!");
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("i love", "pizza");
ht.set("i love", "pizza");
ht.set("i love", "pizza");

console.log("ht :>> ", ht);
console.log("ht.get('i love') :>> ", ht.get("i love"));
console.log("ht.get('dogs') :>> ", ht.get("dogs"));
console.log("ht.get('cats') :>> ", ht.get("cats"));
console.log("ht.get('hello world') :>> ", ht.get("hello world"));
console.log("ht.get('dogs') :>> ", ht.get("dogs"));
