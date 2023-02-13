import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm/TaskForm'

function App () {
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container flex flex-col gap-8 mx-auto p-10'>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App
