function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector('main'); // your <main> element
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // must be capital C
    main.appendChild(h2);       // append to main
  });
}

document.addEventListener('DOMContentLoaded', fetchBooks);
