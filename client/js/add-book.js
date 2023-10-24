const categorySelect = document.querySelector('#category')
const titleText = document.querySelector('#title')
const authorText = document.querySelector('#author')
const coverImageText = document.querySelector('#cover-image')
const abstractText = document.querySelector('#abstract')
const addBookBtn = document.querySelector('#add-book-btn')

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
                option.setAttribute('value', category['id'])
                option.textContent = capitalizeWords(category.name)
                categorySelect.appendChild(option)
            })
        })
        .catch(err => {
            console.error(err)
        });
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
                clearForm()
                window.location.href = '/bookcatalog/client/'
            }).catch((error) => {
                console.log(error)
            });
    }
}

function clearForm() {
    titleText.value = ''
    authorText.value = ''
    coverImageText.value = ''
    categorySelect.value = ''
    abstractText.value = ''
}

addBookBtn.addEventListener('click', addBook)

abstractText.value = ''
getCategories()