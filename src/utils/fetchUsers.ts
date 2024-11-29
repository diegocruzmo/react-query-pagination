import { QueryKey } from '../types'

export const fetchUsers = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [_key, page] = queryKey
  const res = await fetch(`https://reqres.in/api/users?page=${page}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${_key}`)
  }

  return await res.json()
}
