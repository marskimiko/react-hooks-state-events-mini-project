import React from "react";
import Task from './Task';

function TaskList({ tasks, handleTaskDeleteFunction }) {
  // transfor this array into an array of jsx elements 
  const tasksArray = tasks.map((task) => {
    return <Task 
    key={task.text} 
    text={task.text} 
    category={task.category}
    onDeleteTask={handleTaskDeleteFunction}
    />
  });
  
  return (
    <div className="tasks">
      {tasksArray}
    </div>
  );
}

export default TaskList;
