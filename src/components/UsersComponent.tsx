import { useQuery } from '@tanstack/react-query'
import { User } from '../types'
import { fetchUsers } from '../utils/fetchUsers'

const UsersComponent = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['repoData', '1'],
    queryFn: fetchUsers,
    refetchOnWindowFocus: true
  })

  if (isPending) return <div>'Loading...'</div>

  if (isError) return <div>'An error has occurred: '</div> + error.message

  return (
    <section>
      {data?.data.map((user: User) => (
        <div key={user.id}>
          <h2>
            {user.first_name} {user.last_name}
          </h2>
          <p>{user.email}</p>
        </div>
      ))}
    </section>
  )
}

export default UsersComponent
