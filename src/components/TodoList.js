import React from 'react';

const TodoList = (props) => {
  return (
  props.todoList.map(task =>{
    return(
      <div key={task.id}>
        <p>{task.task}</p>
        <p>{task.completed}</p>
      </div>
    )
  })
  )
};

export default TodoList;
