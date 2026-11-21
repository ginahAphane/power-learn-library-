import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadBook() {
      try {
        const base = import.meta.env.VITE_API_URL
        const res = await fetch(`${base}/books/${id}`)
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        setBook(data)
      } catch {
        setError('Book not found or failed to load.')
      } finally {
        setLoading(false)
      }
    }
    loadBook()
  }, [id])

  if (loading) return <p style={{ padding: '20px' }}>Loading book...</p>
  if (error) return <p style={{ padding: '20px', color: 'red' }}>{error} <Link to="/">Go back</Link></p>
  if (!book) return <p style={{ padding: '20px' }}>No book found.</p>

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <Link to="/">← Back to catalog</Link>
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre?.name || book.genre || 'N/A'}</p>
      {book.coverImage && <img src={book.coverImage} alt={book.title} style={{ width: '100%', borderRadius: '10px' }} />}
      <p style={{ marginTop: '16px' }}>{book.description || 'No description available.'}</p>
      {book.isAvailable !== undefined && (
        <p><strong>Status:</strong> {book.isAvailable ? 'Available' : 'Checked out'}</p>
      )}
    </div>
  )
}