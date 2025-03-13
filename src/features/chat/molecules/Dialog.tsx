import { Stack } from '@mui/material'
import { useRef, useEffect } from 'react'

import { Message } from '../atoms'


type DialogProps = {
  messages: Message[]
}
export const Dialog = ({ messages }: DialogProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  return (
    <Stack ref={ref} spacing={2} sx={{
      width: 1,
      height: 1,
      padding: 2,
      border: '1px solid',
      borderColor: 'primary.light',
      borderRadius: 1,
      overflowY: 'auto',
    }}>
      {messages.map(({ text, author, timestamp }, i) => (
        <Message key={i} text={text} author={author} timestamp={timestamp} />
      ))}
    </Stack>
  )
}
