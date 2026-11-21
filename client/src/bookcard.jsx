import { Link } from 'react-router-dom'

export default function BookCard({ book }) {
  return (
    <Link to={`/books/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '14px', background: '#fff' }}>
        {book.coverImage && (
          <img src={book.coverImage} alt={book.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
        )}
        <h3 style={{ margin: '10px 0 4px' }}>{book.title}</h3>
        <p style={{ margin: 0, color: '#555' }}>by {book.author}</p>
        <p style={{ margin: '6px 0 0', fontSize: '13px', color: '#777' }}>
          {book.genre?.name || book.genre || ''}
        </p>
      </div>
    </Link>
  )
}