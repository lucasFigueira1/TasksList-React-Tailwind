import { useState, useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import './index.css'

function TaskForm () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const { createTask } = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='just-post-it-title text-center'>Just Post It</h1>
      <form className='add-task-form mb-4 p-10' onSubmit={handleSubmit}>
        <h2 className='text-2xl text-white font-bold mb-3'>Add Task</h2>
        <input
          placeholder='Add Task'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className='bg-zinc-900 p-3 w-full mb-2 text-white'
        />
        <textarea
          placeholder='Add Description'
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='bg-zinc-900 p-3 w-full mb-2 text-white'
        />
        <button className='just-post-it-add-btn font-bold text-bg-zinc-900'>Add</button>
      </form>
    </div>
  )
}

export default TaskForm
