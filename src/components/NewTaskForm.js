import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  // form gets its values from state rather than the DOM and
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleDetailsChange(event) {
    setText(event.target.value);
    console.log(event.target.value);
  }

  function handleOnChange(event) {
    setCategory(event.target.value);
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('i am submit')

    const newTask = {
      text: text,
      category: category,
    }
    onTaskFormSubmit(newTask);
  }
  
  const optionElements = categories.map((category) => {
      return <option key={category}>{category}</option>
  });
  
  return (
    <form onSubmit={handleSubmit}className="new-task-form">
      <label>
        Details
        <input onChange={handleDetailsChange} type="text" name="text"/>
      </label>
      <label>
        Category
        <select onChange={handleOnChange} name="category">
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
