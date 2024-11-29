import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchCharacters } from '../utils/fetchCharacters'
import { Character, Page } from '../types'

const UsersInfinitePagination = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['characters'],
      queryFn: ({ pageParam }) => fetchCharacters({ pageParam }),
      getNextPageParam: (lastPage: Page) => lastPage.nextPage
    }) as {
      data: { pages: Page[] }
      error: unknown
    }

  if (isLoading) return <h1>Loading...</h1>

  if (error) return <h1>Error on fetch data...</h1>

  return (
    <div>
      <h2>Characters List</h2>
      <ul>
        {data?.pages.map((page: Page, index: number) => (
          <div key={index}>
            {page.characters.map((character: Character) => (
              <li key={character.url}>{character.name}</li>
            ))}
          </div>
        ))}
      </ul>
      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetching}
      >
        Load More
      </button>
    </div>
  )
}

export default UsersInfinitePagination
