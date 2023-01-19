import React from "react";

function CategoryFilter({categories}) {
  function onButtonClick(event){
    event.target.className = "selected";
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((index, category) => <button key={index} onClick={onButtonClick}/>)}
    </div>
  );
}

export default CategoryFilter;
