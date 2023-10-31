
const bookList = document.querySelector('.book-list');
const searching = document.querySelector('#searching')
const loader = document.querySelector("#loading")
const emptyDiv = document.createElement('div')

const baseUrl = 'http://localhost:4000'

function displayBooks(books) {
    bookList.innerHTML = ''
    for (const book of books) {
        bookCard(book)
    }
}

function bookCard(book) {
    const div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML = `
        <div class="action-list">
            <div class="action"><button class="btn-delete" onclick="deleteBook(${book.id}, '${book.title}')"><i class="fa fa-trash"></i></button></div>
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
        </div>
        <p class="abstract">${book.abstract}</p>
    `
    bookList.appendChild(div)
}

function emptyCard() {
    emptyDiv.classList.add('empty-result')
    emptyDiv.innerHTML = `
        <h1>Search Not Found</h1>
        <p>We're sorry, we can't looking for book by this title. Please try to another title again!</p>
        <br><br>
    `
    bookList.appendChild(emptyDiv)
}

function showLoading() {
    loader.classList.add("display");
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}

function hideLoading() {
    loader.classList.remove("display");
}

function getBooks() {
    showLoading()
    axios.get(`${baseUrl}/api/books`)
        .then((res) => {
            hideLoading()
            const books = res.data
            displayBooks(books)
        })
        .catch((error) => {
            console.log(error.message)
        });
}

function editBook(bookId) {
    console.log(bookId)
    window.location.href = `../client/html/book-form.html?id=${bookId}`
}

function deleteBook(bookId, title) {
    Swal.fire({
        title: "Delete",
        html: `Are you sure you want to delete the book via the title <strong>'${title}'</strong>?`,
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

searching.addEventListener('keyup', (e) => {
    const searchQuery = searching.value.toLowerCase()
    if (searchQuery !== '') {
        axios.get(`${baseUrl}/api/books/search/${searchQuery}`)
        .then((res) => {
            const books = res.data
            console.log(books.length, books)
            if (books.length > 0) {
                displayBooks(books)
            } else {
                bookList.innerHTML = ''
                emptyCard()
            }
        })
        .catch((error) => {
            console.log(error.message)
        });
    } else {
        getBooks()
    }
});

getBooks()


