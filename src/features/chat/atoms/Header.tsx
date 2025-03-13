import {
  Stack,
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material'
import { useState } from 'react'
import { RestartAlt } from '@mui/icons-material'


type HeaderProps = {
  onReset: onJustClick
}
export const Header = ({ onReset }: HeaderProps) => {
  const [ open, setOpen ] = useState(false)

  const handleReset = () => {
    setOpen(false)
    onReset()
  }

  return (
    <Stack width={1} spacing={1} direction="row">
      <Typography variant={'h4'}>{'AI Chat'}</Typography>
      <Button
        size="small"
        onClick={() => setOpen(true)}
        variant="outlined"
        sx={{ width: 41, minWidth: 41, '&&': { marginLeft: 'auto' }}}>
        <RestartAlt />
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          {'Начать диалог заново?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {'Будет очищена история переписки и сброшен контекст'}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between' }}>
          <Button onClick={() => setOpen(false)}>{'Отмена'}</Button>
          <Button onClick={handleReset}>{'Очистить'}</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}
