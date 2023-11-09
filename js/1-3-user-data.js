/** 1-3
 * Returns a user profile object with default values for missing properties.
 * @param {Object} userProfile - The user's profile object.
 * @returns {Object} A modified user profile object with default values.
 */
function getUserProfile(userProfile) {
    const { name, email, age, ...rest } = userProfile;
    return {
      name: name ?? "Unknown",
      email: email ?? "Unknown",
      age: age ?? 0,
      ...rest,
    };
  }

// another version
//   function getUserProfile(userProfile) {
//     const { name = "Unknown", email = "Unknown", age = 0, ...rest } = userProfile;
//     return { name, email, age, ...rest };
//   }
  

//TESTS
const userProfile1 = { name: "Alice", age: 30, email: "alice@example.com" };
const userProfile2 = { name: "Bob" };
const userProfile3 = { age: 25, email: "charlie@example.com" };
const userProfile4 = { name: "David", email: "david@example.com" };


console.log(getUserProfile(userProfile1));
// Expected Output: { name: "Alice", age: 30, email: "alice@example.com" }

console.log(getUserProfile(userProfile2));
// Expected Output: { name: "Bob", age: 0, email: "Unknown" }

console.log(getUserProfile(userProfile3));
// Expected Output: { name: "Unknown", age: 25, email: "charlie@example.com" }

console.log(getUserProfile(userProfile4));
// Expected Output: { name: "David", age: 0, email: "david@example.com" }


  