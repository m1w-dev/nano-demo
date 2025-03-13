import { Button } from '@mui/material'
import { DarkMode, LightMode } from '@mui/icons-material'


type ModeToggleProps = {
  mode: 'light' | 'dark' | 'system'
  onClick: onJustClick
}
export const ModeToggle = ({ mode, onClick }: ModeToggleProps) => (
  <Button variant="outlined" onClick={onClick}>
    {mode === 'dark' && <DarkMode />}
    {mode === 'light' && <LightMode />}
  </Button>
)
