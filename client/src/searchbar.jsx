import { useEffect, useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value)
    }, 400)

    return () => clearTimeout(timer)
  }, [value, onSearch])

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search by title or author..."
      style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc' }}
    />
  )
}