type Res = {
  result: {
    cuid: string
    text: { value: string }
  }
}

export const init = async ({ cuid }: { cuid?: string }) => {
  const req = await fetch(`${__CHAT_URL__}.init`, {
    method: 'POST',
    body: JSON.stringify({ uuid: __CHAT_UUID__, cuid }),
  })

  const data: Res = await req.json()
  return data
}
export const req = async ({ text, cuid }: {text: string, cuid?: string}) => {
  const req = await fetch(`${__CHAT_URL__}.request`, {
    method: 'POST',
    body: JSON.stringify({ text, cuid, uuid: __CHAT_UUID__ }),
  })

  const data: Res = await req.json()
  return data
}
