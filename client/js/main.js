
const bookList = document.querySelector('.book-list');

const baseUrl = 'http://localhost:4000'

// Display the book list
function displayBooks(books) {
    bookList.innerHTML = ''
    for (const book of books) {
        bookCard(book)
    }
}

// Create each book of card
function bookCard(book) {
    const div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML = `
        <div class="action-list">
            <div class="action"><button class="btn-delete" onclick="deleteBook(${book.id})"><i class="fa fa-trash"></i></button></div>
            <div class="action"><button class="btn-edit"><i class="fa fa-edit"></i></button></div>
        </div>
        <img class="cover-image" src="${book.cover_image}" alt="${book.title}">
        <h3 class="title">${book.title}</h3>
        <div class="category">
            <span> 
                <i class="fa fa-tag"></i> ${book.name}
            </span> 
            <span>
                <i class="fa fa-user"></i> ${book.author}
            </span>
        </div>
        <p class="abstract">${book.abstract}</p>
    `
    bookList.appendChild(div)
}

// Fetch all books from the database
function getBooks() {
    axios.get(`${baseUrl}/api/books`)
        .then((res) => {
            const books = res.data
            displayBooks(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
}

// Looking for book by id to delete from the database
function deleteBook(id) {
    const isConfirmed = confirm('Are you sure you want to delete this book?')
    if (isConfirmed) {
        console.log(id)
        axios.delete(`${baseUrl}/api/books/delete/${id}`)
            .then((res) => {
                getBooks()
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

// Loading DOM in javascript

getBooks()

