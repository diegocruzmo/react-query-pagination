import { fetchTodos } from '../utils/fetchTodos'
import { useInfiniteQuery } from '@tanstack/react-query'

const Todo = () => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined
    }
  })

  return (
    <div>
      <h2>TODO Pagination</h2>
      <div>
        {data?.pages.map((page, index) => (
          <div key={index}>
            {page.map((todo) => (
              <li key={todo.id}>
                {todo.id} - {todo.title}
              </li>
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => fetchNextPage()}>Load more</button>
    </div>
  )
}

export default Todo
