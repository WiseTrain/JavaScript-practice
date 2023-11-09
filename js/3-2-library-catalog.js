// Prototype chain for library catalog
"use strict";

// Step 1: Create the "Book" Constructor
function Book(author, title, genre) {
    this.author = author;
    this.title = title;
    this.genre = genre;
}

// Step 2: Add a Prototype Method
Book.prototype.displayInfo = function() {
    console.log(`
    BOOK:
        title: ${this.title}
        author: ${this.author}
        genre: ${this.genre}
    `);
}

// Step 3: Create Child Constructors (Fiction and Non-Fiction)
function Fiction(author, title) {
    // Inherit properties from the "Book" constructor and set genre to "Fiction"
    Book.call(this, author, title, "Fiction");
}

function NonFiction(author, title) {
    // Inherit properties from the "Book" constructor and set genre to "Non-fiction"
    Book.call(this, author, title, "Non-fiction");
}

// Step 4: Set Up Prototype Inheritance
Fiction.prototype = Object.create(Book.prototype);
NonFiction.prototype = Object.create(Book.prototype);

// TESTING
const b1 = new Fiction("Fiction book title 1", "John Doe");
b1.displayInfo();

const b2 = new NonFiction("Non-fiction book title 1", "John Jackson");
b2.displayInfo();

// Additional Testing
console.log("Is b1 instance of Book?", b1 instanceof Book); // true
console.log("Is b1 instance of Non-Fiction?", b1 instanceof NonFiction); // false
console.log("Is b2 instance of Book?", b2 instanceof Book); // true
console.log("Is b2 instance of NonFiction?", b2 instanceof NonFiction); // true
