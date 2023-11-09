"use strict";

class AuthSystem {
    // Array to store registered users
    static users = [];
    // Default password for password reset
    static defaultPassword = "new_password";

    // Method to register a new user
    static register = (username, password) => {
        this.users.push({ username, password });
        console.log(`User '${username}' registered successfully.`);
    }

    // Method to attempt login
    static login = (username, password) => {
        // Verify if the user exists
        const index = this.users.findIndex(u => u.username === username && u.password === password)
        return !(index === -1);
    }

    // Method to change a user's password
    static changePassword(username, old_password, new_password) {
        // Verify if the user exists
        const user = this.users.find(u => u.username === username && u.password === old_password)

        if (user) { 
            // Change password if user is found
            user.password = new_password;
            console.log(`Password for user '${username}' changed successfully.`); 
        } else {
            // Indicate if the user is not found
            console.log(`User '${username}' not found. Password not changed.`);
        }
    }

    // Method to reset a user's password to the default password
    static resetPassword(username){
        const user = this.users.find(u => u.username === username)

        if (user) { 
            // Reset password if user is found
            user.password = this.defaultPassword;
            console.log(`Password for user '${username}' reset successfully.`);
        } else {
            // Indicate if the user is not found
            console.log(`User '${username}' not found. Password not reset.`);
        }
    }

    // Method to display user information
    static displayUserInfo = (user) => {
        console.log("\nUSER's INFO:");
        for (let i in user) 
            console.log(`${i}: ${user[i]}`);
    }

    // Method to display information for all users
    static displayAllUsers = () => {
        console.log("LIST OF USERS");
        this.users.forEach(u => this.displayUserInfo(u))
    }

} 

// TESTS
console.log('\n *** Authentification system ***');

// Register a new user
AuthSystem.register("john_doe", "password123");
AuthSystem.displayAllUsers(); // one user is displayed

// Attempt to log in with correct credentials
console.log("Login successful with correct credentials:", AuthSystem.login("john_doe", "password123")); // Output: true

// Attempt to log in with incorrect password
console.log("Login successful with incorrect password:", AuthSystem.login("john_doe", "wrong_password")); // Output: false

// Attempt to log in with correct username
console.log("Login successful with incorrect username:", AuthSystem.login("john_dooo", "password123")); // Output: true

// Change password
AuthSystem.changePassword("john_doe", "password123", "new_password");
// Attempt to log in with the new password
console.log("Login successful with the new password:", AuthSystem.login("john_doe", "new_password")); // Output: true

// Reset password
AuthSystem.resetPassword("john_doe");

// Attempt to log in after password reset
console.log("Login successful with default password:", AuthSystem.login("john_doe", "new_password")); // Output: false
