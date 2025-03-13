import { Box, useColorScheme } from '@mui/material'

import { ModeToggle as ModeToggleFeature } from 'features'


export const ModeToggle = () => {
  const { mode, setMode, systemMode } = useColorScheme()

  if (!mode) return null

  const getMode = () => {
    if (mode === 'system') return systemMode || 'light'

    return mode
  }

  const modeHandler = () => {
    setMode(getMode() === 'dark' ? 'light' : 'dark')
    console.log('getMode')
  }

  return (
    <Box sx={{ padding: 1, textAlign: 'right' }}>
      <ModeToggleFeature mode={getMode()} onClick={modeHandler} />
    </Box>
  )
}
