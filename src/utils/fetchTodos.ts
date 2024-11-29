import { TodoType } from '../types'

const MAX_POST_PAGE = 10

export const fetchTodos = async ({ pageParam }: { pageParam: number }) => {
  const url = `https://jsonplaceholder.typicode.com/todos?_page=${pageParam}&_limit=${MAX_POST_PAGE}`

  const response = await fetch(url)
  const todos = (await response.json()) as TodoType[]
  console.log(url)
  return todos
}
