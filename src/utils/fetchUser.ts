import { QueryKey } from '../types'

export const fetchUser = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [_key, userId] = queryKey
  const res = await fetch(`https://reqres.in/api/users/${userId}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${_key}`)
  }

  return await res.json()
}
