/**
 * Sets default values for object properties if they are null or undefined.
 * @param {Object} obj - The object to modify.
 * @param {Object} defaults - The object containing default values.
 */
function setDefaults(obj, defaults) {
    for(key in defaults){
        obj[key] = obj[key] ?? defaults[key];  
    }
  }
  
  console.log("\n Using of ?? for objects")
  // Test 1
  const obj1 = { name: "Alice", age: null, location: "Wonderland" };
  const defaults1 = { age: 30, location: "Unknown" };
  setDefaults(obj1, defaults1);
  console.log(obj1);
  // Expected Output: { name: "Alice", age: 30, location: "Wonderland" }
  
  // Test 2
  const obj2 = { x: 42, y: undefined, z: null };
  const defaults2 = { x: 10, y: 20, z: 30 };
  setDefaults(obj2, defaults2);
  console.log(obj2);
  // Expected Output: { x: 42, y: 20, z: 30 }
  
  // Test 3
  const obj3 = { a: "Hello", b: "World", c: "!!!", d: null };
  const defaults3 = { a: "Goodbye", b: "Universe" };
  setDefaults(obj3, defaults3);
  console.log(obj3);
  // Expected Output: { a: "Hello", b: "World", c: "!!!", d: null }
  

  