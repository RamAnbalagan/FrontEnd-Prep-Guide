class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    // create tr element
    const row = document.createElement('tr');
  
    // insert cols
    row.innerHTML = `
      <td> ${book.title} </td>
      <td> ${book.author} </td>
      <td> ${book.isbn} </td>
      <td> <a href="#" class="delete"> X </a> </td>
    `;
  
    // append to list
    list.appendChild(row);
  }

  showAlert(message,className) {
    //create div
    const div = document.createElement('div');
    //add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');

    container.insertBefore(div,form);

    // timeout after 3 seconds

    setTimeout( function() {
      document.querySelector('.alert').remove();
    },3000);
  }

  deleteBook(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
    return;
  }

  clearFields () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

class Book {
  constructor(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// local storage class
 class Store {
  static displayBooks() {
    const books = Store.getBooks();
    const ui = new UI();
    books.forEach(book => ui.addBookToList(book));
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }
  static getBooks() {
    if(localStorage.getItem('books')) {
      return JSON.parse(localStorage.getItem('books'));
    }
    return [];
  }
  static removeBook(isbn){
    const books = Store.getBooks();

    books.forEach( (book,index) => {
      console.log(`book isbn = ${book.isbn}`);
      console.log(`isbn is ${isbn}`);
      if(book.isbn === isbn) {
        console.log('found');
        books.splice(index,1)
      }
    });
    console.log(books);
    localStorage.setItem('books',JSON.stringify(books));
  }
}


document.addEventListener('DOMContentLoaded', Store.displayBooks);

// Event listeners
document.querySelector('#book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  // Instantiate book
  const newBook = new Book(title,author,isbn);

  // Instantiate UI
  const ui = new UI();

  //validate values 
  if( title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
    return;
  }

  ui.addBookToList(newBook);
  Store.addBook(newBook);
  ui.clearFields();
  ui.showAlert('Book added!','success');
  e.preventDefault();
});

document.querySelector('table tbody#book-list').addEventListener('click', function(e) {
  // Instantiate UI
  const ui = new UI();
  // call delete
  ui.deleteBook(e.target);
  // remove from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  ui.showAlert('Book Removed!', 'success');
  e.preventDefault();
});