import dayjs from 'dayjs'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useResetAtom } from 'jotai/utils'
import { useQuery, useMutation } from '@tanstack/react-query'

import { chat as chatApi } from 'shared/api'
import { chat as chatStore } from 'shared/store'


export const useStartSession = () => {
  const [ id, setId ] = useAtom(chatStore.id)
  const [ messages, setMessages ] = useAtom(chatStore.history)

  const { data } = useQuery({
    queryKey: ['chat.init'],
    queryFn: chatApi.init.bind(null, { cuid: id }),
  })

  useEffect(() => {
    if (data?.result.cuid) setId(data.result.cuid)
    if (data?.result.cuid && messages.length === 0) setMessages(ms => [...ms, {
      author: 'bot',
      text: __CHAT_FIRST_MESSAGE__,
      timestamp: dayjs().unix(),
    }])
  }, [data, messages, setId, setMessages])
}

export const useDialog = () => {
  const [ id, setId ] = useAtom(chatStore.id)
  const [ input, setInput ] = useAtom(chatStore.input)
  const [ messages, setMessages ] = useAtom(chatStore.history)

  const { mutate: sendMessage } = useMutation({
    mutationKey: ['chat.send', input],
    mutationFn: chatApi.req,
    onSuccess: (data) => {
      setMessages(ms => [
        ...ms,
        {
          author: 'bot',
          text: data.result.text.value,
          timestamp: dayjs().unix(),
        },
      ])
      if (data.result.cuid) setId(data.result.cuid)
    },
  })

  const handleSend = () => {
    sendMessage({ text: input, cuid: id })
    setMessages(ms => [...ms, {
      text: input,
      author: 'user',
      timestamp: dayjs().unix(),
    }])
    setInput('')
  }

  return {
    input,
    messages,
    setInput,
    handleSend,
  }
}

export const useReset = () => {
  const resetId = useResetAtom(chatStore.id)
  const resetInput = useResetAtom(chatStore.input)
  const resetMessages = useResetAtom(chatStore.history)

  const handleReset = () => {
    resetId()
    resetInput()
    resetMessages()
  }

  return {
    handleReset,
  }
}
