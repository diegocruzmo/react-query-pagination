import UsersPaginationComponent from './components/UsersPaginationComponent'
import UsersInfinitePagination from './components/UsersInfinitePagination'
import Todo from './components/Todo'

const App = () => {
  return (
    <>
      <UsersPaginationComponent />
      <hr />
      <UsersInfinitePagination />
      <hr />
      <Todo />
    </>
  )
}

export default App
