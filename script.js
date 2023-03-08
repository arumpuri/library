let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status =  status

}

Book.prototype.info = function() {
    return `${this.Books}, ${this.author}, ${this.pages}, ${this.status}`
}

function addBookToLibrary() {
    myLibrary.push(Book);
}