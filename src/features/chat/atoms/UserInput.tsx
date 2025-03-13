import { Send } from '@mui/icons-material'
import { Button, Stack, TextField } from '@mui/material'


type UserInputProps = {
  input: string
  onSubmit: onJustClick
  setInput: SetState<string>
}
export const UserInput = ({ input, onSubmit, setInput }: UserInputProps) => {

  const submitHandler = (e: SubmitEvent) => {
    e.preventDefault()
    onSubmit()
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <Stack
      spacing={1}
      direction="row"
      component="form"
      sx={{ mt: 'auto' }}
      onSubmit={submitHandler}
    >
      <TextField
        fullWidth
        size="small"
        value={input}
        onChange={inputHandler}
      />
      <Button
        type="submit"
        variant="outlined"
        sx={{ minWidth: 41, width: 41 }}
      >
        <Send />
      </Button>
    </Stack>
  )
}
