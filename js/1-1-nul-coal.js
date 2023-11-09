/**
 * Returns the value of `x` if it is not null or undefined; otherwise, returns `y`.
 * @param {*} x - The first value to consider.
 * @param {*} y - The fallback value.
 * @returns {*} The chosen value between `x` and `y`.
 */
function chooseValue(x, y) {
  return x??y
}

console.log("Basics of ?? operator")
console.log(chooseValue(null, "Hello"));
console.log(chooseValue(undefined, "World")); // Output: "World"
console.log(chooseValue("Goodbye", "Cruel World")); // Output: "Goodbye"
