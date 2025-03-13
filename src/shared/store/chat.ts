import { atomWithStorage, createJSONStorage } from 'jotai/utils'


export const id = atomWithStorage<string>(
  'chat.id',
  '',
  createJSONStorage(() => localStorage)
)

export const input = atomWithStorage<string>(
  'chat.input',
  '',
  createJSONStorage(() => localStorage)
)

export const history = atomWithStorage<Message[]>(
  'chat.history',
  [],
  createJSONStorage(() => localStorage)
)
