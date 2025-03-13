import { Chat as ChatFeature } from 'features'

import { useReset, useDialog, useStartSession } from './hooks'


export const Chat = () => {
  useStartSession()
  const { handleReset } = useReset()
  const { input, messages, setInput, handleSend } = useDialog()

  return (
    <ChatFeature
      input={input}
      messages={messages}
      onReset={handleReset}
      onSubmit={handleSend}
      setInput={setInput}
    />
  )
}
