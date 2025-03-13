import dayjs from 'dayjs'
import { Box, Theme, Typography } from '@mui/material'


type MessageProps = Message
export const Message = ({ text, author, timestamp }: MessageProps) => (
  <Box sx={( theme: Theme ) => ({
    px: 1,
    py: 1,
    width: `calc(100% - ${theme.spacing(5)})`,
    border: '1px solid',
    borderColor: author === 'bot' ? 'secondary.dark' : 'primary.dark',
    borderRadius: 1,
    '&&': {
      marginLeft: author === 'bot' ? 0 : 'auto',
      marginRight: author === 'bot' ? 'auto' : 0,
    },
  })}>
    <Typography>{text}</Typography>
    <Typography variant="caption" textAlign="right" component="p">
      {dayjs.unix(timestamp).format('HH:mm:ss')}
    </Typography>
  </Box>
)
