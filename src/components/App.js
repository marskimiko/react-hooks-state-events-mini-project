import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksStateArray, setTasksStateArray] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleTaskDelete(text) {
    const newTaskArray = tasksStateArray.filter((task) => task.text !== text);
    setTasksStateArray(newTaskArray)
  }

  function onTaskFormSubmit(formData) {
    const newTaskArray = [...tasksStateArray, formData]
    setTasksStateArray(newTaskArray);
  }

  function handleCategorySelect(newSelectedCategory){
    setSelectedCategory(newSelectedCategory)
    console.log(newSelectedCategory)
  }

  const filteredTasks = tasksStateArray.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      selectedCategory={selectedCategory} 
      handleCategorySelect={handleCategorySelect} 
      />
      <NewTaskForm 
      categories={CATEGORIES.filter(cat => cat !== 'All')}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
      tasks={filteredTasks} 
      handleTaskDeleteFunction={handleTaskDelete} 
      />
    </div>
  );
}

export default App;