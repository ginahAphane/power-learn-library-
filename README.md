# Library Catalog - Frontend

A React frontend for the Library Catalog app. It lets users browse books, search by title or author, filter by genre, sort, and view full details for one book.

Built with React + Vite + React Router. It talks to a NestJS backend.

## Features

- Browse all books in a responsive grid
- Search by title or author (debounced)
- Filter by genre
- Sort by title or author
- View single book details page
- Loading skeleton, error, and empty states
- Click a book card to open its detail page

## Tech Stack

- React + Vite
- React Router DOM
- JavaScript (JSX)
- Fetch API

## Project Structure

client/
  .env
  src/
    main.jsx
    App.jsx
    pages/
      HomePage.jsx
      BookDetail.jsx
    components/
      BookGrid.jsx
      BookCard.jsx
      SearchBar.jsx

## Setup

### 1. Clone the repo

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME/client