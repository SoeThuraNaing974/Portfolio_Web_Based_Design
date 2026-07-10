import { useEffect, useState } from 'react'

export default function useTypingEffect(
  words,
  { typeSpeed = 90, deleteSpeed = 45, pause = 1800 } = {},
) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let delay = deleting ? deleteSpeed : typeSpeed

    if (!deleting && text === word) delay = pause
    else if (deleting && text === '') delay = 350

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause])

  return text
}
