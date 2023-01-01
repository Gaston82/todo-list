import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks,onDelete,onEdit}) => {
  return (
    <section>
    {
        tasks.map((task)=>(<TodoItem key={task.id} task={task} onDelete={onDelete} onEdit={onEdit}/>))
    }
    </section>
  )
}

export default TodoList