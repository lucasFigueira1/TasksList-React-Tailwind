import { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext'
import './index.css'
import { RiDeleteBin6Line } from 'react-icons/ri'

function TaskCard ({ task }) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className='post-it-card p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500 text-sm'>{task.description}</p>
      <button
        className='post-it-trash-bin px-2 py-1 rounded-md mt-4 ml-auto' onClick={() => deleteTask(task.id)}
      ><RiDeleteBin6Line />
      </button>
    </div>
  )
}

export default TaskCard
