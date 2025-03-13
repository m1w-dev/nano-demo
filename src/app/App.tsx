import { createStore, Provider as JotaiProvider } from 'jotai'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Chat } from 'pages'

import { Theme } from './theme'


const store = createStore()
const queryClient = new QueryClient()

export const App = () => {

  return (
    <JotaiProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Chat />
        </Theme>
      </QueryClientProvider>
    </JotaiProvider>
  )
}
