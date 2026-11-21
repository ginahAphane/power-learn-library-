import { useState } from 'react'
import BookGrid from '../components/BookGrid.jsx'
import SearchBar from '../components/SearchBar.jsx'

const GENRES = [
  { id: '', name: 'All Genres' },
  { id: '1', name: 'Fiction' },
  { id: '2', name: 'Non-Fiction' },
  { id: '3', name: 'Science' },
  { id: '4', name: 'History' },
]

export default function HomePage() {
  const [search, setSearch] = useState('')
  const [genreId, setGenreId] = useState('')
  const [sortBy, setSortBy] = useState('')

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      <h1>Library Catalog</h1>
      <p>Browse and search for books.</p>

      <SearchBar onSearch={setSearch} />

      <div style={{ display: 'flex', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <label>
          Filter by genre:{' '}
          <select value={genreId} onChange={(e) => setGenreId(e.target.value)}>
            {GENRES.map((g) => (
              <option key={g.id || 'all'} value={g.id}>{g.name}</option>
            ))}
          </select>
        </label>

        <label>
          Sort by:{' '}
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Default</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </label>
      </div>

      <BookGrid search={search} genreId={genreId} sortBy={sortBy} />
    </div>
  )
}