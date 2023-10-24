
const bookList = document.querySelector('.book-list');

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
            <div class="action"><button class="btn-delete"><i class="fa fa-trash"></i></button></div>
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

function getBooks() {
    axios.get(`${baseUrl}/api/books`)
        .then((res) => {
            const books = res.data
            console.log(books);
            displayBooks(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
}

getBooks()

