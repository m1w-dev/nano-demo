import { Stack } from '@mui/material'

import { Dialog } from './molecules'
import { Header, UserInput } from './atoms'


type ChatProps = {
  input: string
  messages: Message[]
  onReset: onJustClick
  onSubmit: onJustClick
  setInput: SetState<string>
}
export const Chat = ({
  input,
  messages,
  onReset,
  onSubmit,
  setInput,
}: ChatProps) => {


  return (
    <Stack spacing={2} sx={{
      width: 1,
      height: 1,
      padding: 2,
      border: '1px solid',
      borderRadius: 1,
      borderColor: 'primary.main',
      overflow: 'hidden',
    }}>
      <Header onReset={onReset} />
      <Dialog messages={messages} />
      <UserInput
        input={input}
        onSubmit={onSubmit}
        setInput={setInput}
      />
    </Stack>
  )
}
