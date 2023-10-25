
const bookId = document.getElementById('book_id');
const titleText = document.querySelector('#title')
const authorText = document.querySelector('#author')
const coverImageText = document.querySelector('#cover-image')
const categorySelect = document.querySelector('#category')
const abstractText = document.querySelector('#abstract')
const addBookBtn = document.querySelector('#add-book-btn')
const updateBookBtn = document.querySelector('#update-book-btn')
const bookInfo = document.querySelector('.book-info')

// Define default category id when try to update book information
let categoryId = 0


const baseUrl = `http://localhost:4000`

function capitalizeWords(strangeWords) {
    const words = strangeWords.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
    }
    return words.join(" ")   
}

function getCategories() {
    axios.get(`${baseUrl}/api/categories`)
        .then(res => {
            res.data.forEach(category => {
                const option = document.createElement('option')
                if (category.id === categoryId) {
                    option.setAttribute('value', category['id'])
                    option.textContent = capitalizeWords(category.name)
                    option.selected = true
                } else {
                    option.setAttribute('value', category['id'])
                    option.textContent = capitalizeWords(category.name)
                    option.selected = false
                }
                categorySelect.appendChild(option)
            })
        })
        .catch(error => {
            console.error(error.message)
        });
}

function clearForm() {
    bookId.value = ''
    titleText.value = ''
    authorText.value = ''
    coverImageText.value = ''
    categorySelect.value = ''
    abstractText.value = ''
}

function addBook(event) {
    event.preventDefault()
    if (titleText.value === '') {
        alert('Please enter a title')
    } else if (authorText.value === '') {
        alert('Please enter a author')
    } else if (coverImageText.value === '') {
        alert('Please enter a cover image')
    } else if (abstractText.value === '') {
        alert('Please enter a abstract')
    } else {
        let currentDate = new Date().toJSON()
        const bookObj = {
            title: titleText.value,
            author: authorText.value,
            cover_image: coverImageText.value,
            category_id: categorySelect.value,
            abstract: abstractText.value,
            added_date: currentDate
        }
        console.log(bookObj)
        axios.post(`${baseUrl}/api/books/add`, bookObj)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    title: 'Add Book',
                    text: `Your book has been added success.`,
                    showConfirmButton: false,
                    icon: 'success',
                    timer: 1500
                }).then(() => {
                    clearForm()
                    window.location.href = '/bookcatalog/client/'
                });
            }).catch((error) => {
                console.log(error.message)
            });
    }
}

// Calling button add book 
addBookBtn.addEventListener('click', addBook)

function updateBook(event) {
    event.preventDefault()
    if (titleText.value === '') {
        alert('Please enter a title')
    } else if (authorText.value === '') {
        alert('Please enter a author')
    } else if (coverImageText.value === '') {
        alert('Please enter a cover image')
    } else if (abstractText.value === '') {
        alert('Please enter a abstract')
    } else {
        const bookObj = {
            title: titleText.value,
            author: authorText.value,
            cover_image: coverImageText.value,
            category_id: categorySelect.value,
            abstract: abstractText.value
        }
        console.log(bookObj, bookId.value)
        axios.put(`${baseUrl}/api/books/update/${bookId.value}`, bookObj)
            .then((res) => {
                console.log(res.data)
                Swal.fire({
                    title: 'Update Book',
                    text: `Your book has been updated success.`,
                    showConfirmButton: false,
                    icon: 'success',
                    timer: 1500
                }).then(() => {
                    clearForm()
                    window.location.href = '/bookcatalog/client/'
                });
            }).catch((error) => {
                console.log(error.message)
            });
    }
}

// Calling button update book
updateBookBtn.addEventListener('click', updateBook)

// Looking book catalog by id then display on form
function getBookById() {
    let params = new URLSearchParams(document.location.search)
    if (params.get('id') !== null) {
        addBookBtn.style.display = 'none'
        bookInfo.textContent = 'Update Book Information'
        axios.get(`${baseUrl}/api/books/${params.get('id')}`)
        .then((res) => {
            const book = res.data
            console.log(book)
            bookId.value = book.id
            titleText.value = book.title
            authorText.value = book.author
            coverImageText.value = book.cover_image
            abstractText.value = book.abstract
            categoryId = book.category_id
            getCategories()

        }).catch((error) => {
            console.log(error.message)
        });
    } else {
        bookInfo.textContent = 'Add Book Information'
        updateBookBtn.style.display = 'none'
        getCategories()
    }
}

abstractText.value = ''
getBookById()