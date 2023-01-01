import React, { useState } from 'react'
import TodoEdit from './TodoEdit'



const TodoItem = ({task,onDelete,onEdit}) => {
    const[showEdit,setShowEdit]=useState(false)

    const handleDelete=(id)=>{
        onDelete(task.id)
    }

    const handleShowEdit=()=>{
        setShowEdit(!showEdit)
    }

    const onSubmit=(id,newTaskName)=>{
        setShowEdit(false)
        onEdit(id,newTaskName)
    }

    let content = <h3>{task.name}</h3>
    if (showEdit) {
        content = <TodoEdit task={task}  onSubmit={onSubmit}/>
    }

  return (
    <article>
        <div>
            {content}
        </div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleShowEdit}>Edit</button>
    </article>
  )
}

export default TodoItem