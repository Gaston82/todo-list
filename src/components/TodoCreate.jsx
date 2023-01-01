import React, { useState } from 'react'


const TodoCreate = ({onCreate}) => {

    const [taskName,setTaskName]=useState("")

    const handleChange=(event)=>{
      setTaskName(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(taskName)
        setTaskName("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={taskName}/>
            <button type='submit'>Add task</button>
        </form>
    </div>
  )
}

export default TodoCreate