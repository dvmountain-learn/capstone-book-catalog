const bookContainer = document.querySelector('.container')

const baseUrl = 'http://localhost:4000'

function renderBookCard(book) {

    const dateSet = new Date(book.added_date)
    const formatDate = dateSet.toDateString()
    const div = document.createElement('div')
    
    div.classList.add('books')
    div.innerHTML = `
        <div class="side-image">
            <img class="detail-image" src="${book.cover_image}" alt="${book.title}">
        </div>
        <div class="side-info">
            <h3 class="detail-title">${book.title}</h3>
            <div class="detail-added">
                <span>
                    <i class="fa fa-clock-o"></i> ${formatDate}
                </span>
            </div>
            <div class="detail-category">
                <span> 
                    <i class="fa fa-tag"></i> ${book.name}
                </span> 
                <span>
                    <i class="fa fa-user"></i> ${book.author}
                </span>
            </div>
            <pre class="detail-abstract">${book.abstract}</pre>
        </div>
    `
    bookContainer.appendChild(div)
}

function renderPage404() {
    const div = document.createElement('div')
    div.innerHTML = `
    <section class="page_404">
        <div class="four_zero_four_bg">
            <h1 class="text-center ">404</h1>
        </div>
        <div class="constant_box_404">
            <h3 class="h2">
            Page Not Found
            </h3><br>
            <p>We’re sorry, the page you have looked for does not exist in our website!</p>
            <a href="../index.html" class="link_404">Go to Home</a>
        </div>
    </section>
    `
    bookContainer.appendChild(div)
}

function getBookById() {
    let params = new URLSearchParams(document.location.search)
    axios.get(`${baseUrl}/api/books/${params.get('id')}`)
        .then((res) => {
            const book = res.data
            if (book === '') {
                renderPage404()
            } else {
                renderBookCard(book)
            }
        }).catch((error) => {
            console.log(error.message)
        });
}

getBookById()