import React from "react";

function CategoryFilter({ categories, handleCategorySelect, selectedCategory }) {
  
  const buttonElements = categories.map((cat) =>{
    return (
      <button
        className={cat === selectedCategory ? "selected" : null} 
        key={cat} 
        onClick={() => handleCategorySelect(cat)}>
        {cat}
      </button>
    )
  })
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;
