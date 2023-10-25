const bookContainer = document.querySelector('.container')

const baseUrl = 'http://localhost:4000'

function renderBookCard(book) {
    const div = document.createElement('div')
    div.classList.add('books')
    div.innerHTML = `
        <div class="side-image">
            <img class="detail-image" src="${book.cover_image}" alt="${book.title}">
        </div>
        <div class="side-info">
            <h3 class="detail-title">${book.title}</h3>
            <div class="detail-category">
                <span> 
                    <i class="fa fa-tag"></i> ${book.name}
                </span> 
                <span>
                    <i class="fa fa-user"></i> ${book.author}
                </span>
            </div>
            <p class="detail-abstract">${book.abstract}</p>
        </div>
    `
    bookContainer.appendChild(div)
}

function getBookById() {
    let params = new URLSearchParams(document.location.search)
    axios.get(`${baseUrl}/api/books/${params.get('id')}`)
        .then((res) => {
            const book = res.data
            renderBookCard(book)
        }).catch((error) => {
            console.log(error.message)
        });
}

getBookById()