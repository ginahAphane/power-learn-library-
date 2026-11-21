import { useEffect, useState } from 'react'
import BookCard from './BookCard.jsx'

export default function BookGrid({ search, genreId, sortBy }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadBooks() {
      setLoading(true)
      setError('')
      try {
        const params = new URLSearchParams()
        if (genreId) params.append('genreId', genreId)
        if (search) params.append('search', search)
        if (sortBy) params.append('sortBy', sortBy)

        const base = import.meta.env.VITE_API_URL
        const res = await fetch(`${base}/books?${params.toString()}`)
        if (!res.ok) throw new Error('Failed to load books')
        const data = await res.json()
        const list = Array.isArray(data) ? data : data.books || []
        setBooks(list)
      } catch (err) {
        setError('Something went wrong loading books. Please try again.')
      } finally {
        setLoading(false)
      }
    }
    loadBooks()
  }, [search, genreId, sortBy])

  if (loading) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} style={{ height: '220px', background: '#eee', borderRadius: '10px' }} />
        ))}
      </div>
    )
  }

  if (error) return <p style={{ color: 'red' }}>{error}</p>
  if (books.length === 0) return <p>No books found. Try a different search or genre.</p>

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  )
}