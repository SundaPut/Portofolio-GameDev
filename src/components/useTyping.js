
import { useEffect, useState } from 'react'

export default function useTyping(text, speed = 35, delay = 250) {
  const [out, setOut] = useState('')
  useEffect(() => {
    let i = 0
    const start = setTimeout(() => {
      const t = setInterval(() => {
        setOut(prev => (i < text.length ? prev + text[i++] : (clearInterval(t), prev)))
      }, speed)
    }, delay)
    return () => { clearTimeout(start) }
  }, [text, speed, delay])
  return out
}
