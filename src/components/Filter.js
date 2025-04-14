import React from 'react';

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category-select">Filter by category:</label>
      <select id="category-select" onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
    </div>
  );
}

export default Filter;
