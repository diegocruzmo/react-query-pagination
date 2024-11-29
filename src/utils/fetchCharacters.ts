import { Character, FetchedData } from '../types'

export const fetchCharacters = async ({
  pageParam = 'https://swapi.dev/api/people/?page=1&format=json'
}: {
  pageParam?: string
}) => {
  const res = await fetch(pageParam)

  if (!res.ok) {
    throw new Error(`Failed to fetch data`)
  }

  const data: FetchedData = await res.json()

  const characters = data.results as Character[]

  return {
    characters,
    nextPage: data.next || null
  }
}
