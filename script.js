// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



//add book to the book list

let myLibrary = [];


//factory function for new object
const NewBook = (title, author, pages, languages, publishingDate,status) => {
  const getTitle = () => title;
  const getAuthor = () => author;
  const getPages = () => pages;
  const getLanguages = () => languages;
  const getPublishingDate = () => publishingDate;
  const getStatus = () => status;
  return {getTitle, getAuthor, getPages, getLanguages, getPublishingDate, getStatus};
  
}

//using 


function AddNewBook(event) {
  
  event.preventDefault();
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let languages = document.querySelector('#languages').value;
  let publishingDate = document.querySelector('#publishingDate').value;
  let status = document.querySelector('#book-status').value;

  let book = NewBook(title, author, pages, languages, publishingDate,status);
  console.log(book);

  myLibrary.push(book);

  let key = Math.floor(Math.random() * 1000);

  //set the data and save in the local storage
  localStorage.setItem(key, JSON.stringify(book));

}



//get the data from local storage
// localStorage.getItem(key, JSON.parse(Book));


//display the list on the web
function displayBook() {
  const tableList = document.querySelector(".tableBook")

  const row = document.createElement("tr");
  const cellTitle = document.createElement("td");
  const cellAuthor = document.createElement("td");
  const cellPages = document.createElement("td");
  const cellStatus = document.createElement("td");
  const cellRemove = document.createElement("td");
  cellTitle.textContent 

  const readyRow = tableList.append(row);
  readyRow.append(cellTitle, cellAuthor, cellPages, cellStatus, cellRemove);


}

//to remove item
// localStorage.removeItem(book);


// addButton.addEventListener('click', AddNewBook);


const addButton = document.querySelector(".add-btn");
addButton.addEventListener('submit', function getTitle(e) {
  let title = document.getElementById('title');
  e.preventDefault();
  console.log('hello');
});