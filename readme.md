*** Overview of the App:

The Book Catalog App is a web-based application designed to help users manage and organize their collection of books. The app allows users to perform the following tasks:

    1) Add Books: Users can add new books to the catalog by providing details such as book title, author, category, image, and abstract.

    2) Update Books: Users have the ability to update book information, including title, author, category, and more. They can also upload a new book cover image.

    3) Delete Books: Books that are no longer needed in the collection can be easily removed from the catalog.

    4) Search Books: The app provides a search functionality that allows users to search for books by title. This feature simplifies the process of finding specific books in a large collection.

*** Key Features and Components:

The Book Catalog App is built using HTML/CSS for the user interface or animation and javascript uses library axios to talk with a server. I'm also using Node to create the back-end and use Postgres for database management. Some of the key features and components of the app include:

    1) Database: It has two tables categories and books that have a category_id as a reference as foreign key information in a Postgres database. Category entry is associated with field name and Book entry is associated with details such as title, author, category, abstract, added date, and cover image.

    2) User Interface: The user interface is designed to be clean and intuitive. It displays book information in cards, including the book cover image, title, category, and 3 lines of abstract. Especially on the book lists allows users `Navigation` to a book detail If users want to see full information, they can `Click` on the cover image, and it'll be auto-linked to page book detail, including a cover image, title, added date, category, author, and abstract.

    3) Add and Update Forms: Users can interact with the app through forms that allow them to add new books and update existing book details.

    4) Search Functionality: The search box enables users to search for books based on their titles. As users type in the search query, the app dynamically sends a request to the server by filtering the displayed books.
    

