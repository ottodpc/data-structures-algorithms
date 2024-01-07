// create a function that reverses a string: "Hi My name is Cyprien" should be: "neirpyC si eman yM iH

function reverseString(str) {
  // O(n)
  let newStr = [];
  for (i = str.length - 1; i >= 0; i--) {
    newStr.push(str[i]);
  }
  console.log(
    "newStr :>> ",
    newStr.join(""),
    str.length - 1,
    str[str.length - 1],
    "Cu".length
  );
  return newStr;
}

reverseString("Hi My name is Cyprien");
