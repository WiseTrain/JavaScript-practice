// 2-3
/**
 * Checks if a given string is a valid email address based on a regular expression pattern.
 * @param {string} email - The email address to be validated.
 * @returns {boolean} true if the email is valid, false otherwise.
 */
function isValidEmail(email) {
    const email_pattern = /^[\w-\._%+-]+@([\w-]+\.)+[\w-]{2,}/i;
    // const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return email_pattern.test(email)
}

//Tests
console.log("\nValidate an Email Address");
console.log(isValidEmail("example@example.com")); // true
console.log(isValidEmail("user@domain.co.uk")); // true
console.log(isValidEmail("invalid-email")); // false
console.log(isValidEmail("no@tld.")); // false
console.log(isValidEmail("missingat.com")); // false


  