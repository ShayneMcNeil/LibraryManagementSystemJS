/* 

    Assignment: Library Management System in JavaScript
    Student Name: Shayne McNeil
    Student ID: W0454809
    Date: March 8, 2025

*/

// Factory function for creating book objects

function createBook(title, author, available) {
    return {
        title: title,
        author: author,
        available: available,
        getDetails() {
            return `Title: ${this.title}, Author: ${this.author}`;
        },
        borrowBook() {
            if(this.available) {
                this.available = false;
                return `${this.title} by ${this.author} has been borrowed successfully!`;
            } else {
                return `Sorry, the book ${this.title} by ${this.author} is already borrowed.`;
            }
        },
        returnBook() {
            if(!this.available) {
                this.available = true;
                return `${this.title} by ${this.author} has been returned successfully!`;
            } else {
                return `The book ${this.title} by ${this.author} is already available.`;
            }
        }
    }
}

// Create book object 

let book = {
    title: "Life of Pi", 
    author: "Yann Martel",
    available: true,
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}`;
    },
    borrowBook() {
        if(this.available) {
            this.available = false;
            return `${this.title} by ${this.author} has been borrowed successfully!`;
        } else {
            return `Sorry, the book ${this.title} by ${this.author} is already borrowed.`;
        }
    },
    returnBook() {
        if(!this.available) {
            this.available = true;
            return `${this.title} by ${this.author} has been returned successfully!`;
        } else {
            return `The book ${this.title} by ${this.author} is already available.`;
        }
    }
};

// Testing all methods of the Book object 

console.log(book.getDetails()); // Works
console.log(book.borrowBook()); // Works
console.log(book.borrowBook()); // Works
console.log(book.returnBook()); // Works

// Create library object

let librarian = {
    firstName: "Sarah",
    lastName: "Smith",
    _shift: "morning",
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set shift(newShift) {
        if(newShift === "morning" || newShift === "evening") {
            this._shift = newShift;
        } else {
            console.log("Invalid shift. Please enter \'morning\' or \'evening\'.");
        }
    },
    get shift() {
        return this._shift;
    }
};

// Test the library object's methods

console.log(librarian.fullName);  // Works
librarian.shift = "night";  // Works
librarian.shift = "evening";  // Works
console.log(librarian.shift); // Works

// Create library object

let library = {
    books: [],
    librarian: librarian,
    addBook(newBook) {
        this.books.push(newBook);
    },
    listAvailableBooks() {
        return this.books.filter(book => book.available).map(book => book.title);
    },
    listBorrowedBooks() { // Method I added 
        return this.books.filter(book => !book.available).map(book => book.title);
    }
};

// Test library object's methods
library.addBook(book); // Book we created at the beginning 
library.addBook({ title: "Introduction to JavaScript", author: "John Doe", available: false }); // Works
library.addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", available: true }); // Works

console.log(library.listAvailableBooks()); // Works
console.log(library.listBorrowedBooks()); // Works

let book2 = createBook("Harry Potter and the Philosopher's Stone", "J. K. Rowling", true); // Create new book using factory function 
library.addBook(book2) // Add new book to the library
console.log(library.listAvailableBooks()); // Proof that the book was created successfully and added to the library.