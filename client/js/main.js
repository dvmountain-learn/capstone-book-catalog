
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
            <div class="action"><button class="btn-edit" onclick="editBook(${book.id})"><i class="fa fa-edit"></i></button></div>
        </div>
        <a class="book-link-image" href="../client/html/book-detail.html?id=${book.id}">
            <img class="cover-image" src="${book.cover_image}" alt="${book.title}">
        </a>
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
            console.log(error.message)
        });
}

// Looking for book by id to edit from the database
function editBook(bookId) {
    console.log(bookId)
    window.location.href = `../client/html/book-form.html?id=${bookId}`
}

// Looking for book by id to delete from the database
function deleteBook(bookId) {
    // const isConfirmed = confirm('Are you sure you want to delete this book?')
    // if (isConfirmed) {
    //     console.log(bookId)
    //     axios.delete(`${baseUrl}/api/books/delete/${bookId}`)
    //         .then((res) => {
    //             getBooks()
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }

    Swal.fire({
        title: "Delete",
        text: "Are you sure you want to delete this book?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: 'red',
        confirmButtonText: 'Yes',
        cancelButtonText: "No"
     }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`${baseUrl}/api/books/delete/${bookId}`)
            .then((res) => {
                Swal.fire({
                    title: 'Delete',
                    text: `Your book has been deleted with id: ${bookId} success.`,
                    showConfirmButton: false,
                    icon: 'success',
                    timer: 1000
                }).then(() => {
                    getBooks()
                });
            })
            .catch((error) => {
                console.log(error.message);
            })
        } 
      });
     
     
}

// Loading DOM in javascript
getBooks()

// Swal.fire({
//     title: 'Auto close alert!',
//     text: 'I will close in 2 seconds.',
//     timer: 1000
//   }).then(function() {
    
//   })


