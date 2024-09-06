var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-popup-button");
var container = document.querySelector(".container");
var addBookNote = document.getElementById("add-book");
var bookTitle = document.getElementById("book-title");
var bookAuthor = document.getElementById("book-author");
var bookDescription = document.getElementById("book-description");
var cancelBookNote = document.getElementById("add-cancel");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

cancelBookNote.addEventListener("click", function (event) {
  event.preventDefault();
  popupbox.style.display = "none";
  popupoverlay.style.display = "none";
});

addBookNote.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h1>${bookTitle.value}</h1>
  <h5>${bookAuthor.value}</h5>
  <p>${bookDescription.value}</p>
  <button onclick='deleteEvent(event)'>Delete</button>
  `;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

function deleteEvent(event) {
  event.target.parentElement.remove();
}
