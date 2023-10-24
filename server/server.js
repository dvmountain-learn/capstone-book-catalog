require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const {SERVER_PORT} = process.env

app.use(express())
app.use(cors())
app.use(express.json())

// app.use(express.static(path.join(__dirname + '/client')))

const {
    seed,
    getCategories,
    getBooks,
    createBook,
    updateBook,
    deleteBook,
} 
= require('./controller.js')

app.post(`/api/seed`, seed)
// seed()

app.get(`/api/categories`, getCategories)
app.get(`/api/books`, getBooks)
app.post(`/api/books/add`, createBook)
app.put(`/api/books/update/:id`, updateBook)
app.delete(`/api/books/delete/:id`, deleteBook)

app.listen(SERVER_PORT, () => {
    console.log('Server listening on port: ' + SERVER_PORT)
})