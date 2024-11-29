import { useQuery } from '@tanstack/react-query'
import { fetchUsers } from '../utils/fetchUsers'
import { useState } from 'react'
import { User, Data, Usr } from '../types'
import { fetchUser } from '../utils/fetchUser'

const UsersPaginationComponent = () => {
  const [page, setPage] = useState<number>(1)
  const [userId, setUserId] = useState<number | null>(null)

  const { isPending, isError, data, error } = useQuery<Data, Error>({
    queryKey: ['usersPagination', page],
    queryFn: fetchUsers,
    keepPrevoisData: true
  })

  const userQuery = useQuery<Usr>({
    queryKey: ['user', userId],
    queryFn: fetchUser,
    enabled: userId !== null
  })

  const handleUser = (id: number) => {
    setUserId(id)
  }

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h2>Pagination</h2>
      <ul>
        {data?.data.map((user: User) => (
          <li onClick={() => handleUser(user.id)} key={user.id}>
            {user.email}
          </li>
        ))}
      </ul>
      <p>Page: {page}</p>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Back
        </button>
        <button
          disabled={page === data.total_pages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default UsersPaginationComponent
