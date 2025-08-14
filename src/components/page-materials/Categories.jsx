// src/components/page-materials/Categories.jsx
import React from 'react';
import PropTypes from 'prop-types';
import * as UI from './CategoryStyles';

const Categories = ({ threads, filtered, setFiltered }) => {
  const handleFilteredThreadByCategory = (key) => {
    setFiltered(filtered === key ? '' : key);
  };

  const uniqueCategories = [...new Set(threads.map(thread => thread?.category))].filter(Boolean);

  return (
    <UI.CategoriesContainer>
      <UI.CategoriesHeader>
        <h3>Categories</h3>
        {filtered && (
          <UI.ClearFilter onClick={() => setFiltered('')}>
            Clear filter
          </UI.ClearFilter>
        )}
      </UI.CategoriesHeader>

      <UI.CategoriesList>
        {uniqueCategories.map((category) => (
          <UI.CategoryItem 
            key={category}
            active={filtered === category}
            onClick={() => handleFilteredThreadByCategory(category)}
          >
            #{category}
          </UI.CategoryItem>
        ))}
      </UI.CategoriesList>
    </UI.CategoriesContainer>
  );
};

const threadShape = {
  category: PropTypes.string.isRequired,
};

Categories.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string.isRequired,
  setFiltered: PropTypes.func.isRequired,
};

export default Categories;
