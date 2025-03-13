import { Stack } from '@mui/material'

import { ModeToggle, Chat as ChatWidget } from 'widgets'


export const Chat = () => (
  <Stack spacing={1} sx={{
    height: '100vh',
    'height ': '100svh',
    'height  ': '100dvh',
    padding: 2,
  }}>
    <ModeToggle />
    <ChatWidget />
  </Stack>
)
