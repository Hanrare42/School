const { runInThisContext } = require("vm");

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayBook() {
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Published: " + this.year);
    }

    static displayBooks(books) {
        console.log("here is your list of books: ");
        for (const book of books) {
            console.log("Title: " + book.title);
            console.log("Author: " + book.author);
            console.log("Published: " + book.year);
            console.log('-'.repeat(10));
        }
    }
}

let myBook = new Book

const books = [
    new Book("javascript", "Nils Garland", "2024"),
    new Book("HTML", "Rexx Larsson", "2019"),
];

Book.displayBooks(books);