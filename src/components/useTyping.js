
import { useState, useEffect } from "react"

export default function useTyping(text, speed = 50, delay = 0) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    let i = 0
    setDisplayed("")

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed((prev) => prev + text.charAt(i))
        i++
        if (i >= text.length) {
          clearInterval(interval)
        }
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      setDisplayed("")
    }
  }, [text, speed, delay])

  return displayed
}
