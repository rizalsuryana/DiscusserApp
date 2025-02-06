import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoriesContainer,
  FilterCategoryButton,
  CategoriesList,
  CategoriesTitle,
} from '../../components/styled/Category'; // Import styling dari kategori

const Categories = ({ threads, filtered, setFiltered, isMobileMenuOpen }) => {
  const handleFilteredThreadByCategory = (key) => {
    setFiltered(filtered === key ? '' : key); // Jika kategori yang sama diklik lagi, reset
  };

  return (
    <CategoriesContainer isMobileMenuOpen={isMobileMenuOpen}>
      <CategoriesTitle>Categories:</CategoriesTitle>
      <CategoriesList>
        {threads
          ?.filter((value, index, item) => index === item.findIndex((temp) => temp?.category === value?.category))
          .map((thread) => (
            <div key={`${thread?.category}-${thread?.createdAt}`}>
              <FilterCategoryButton
                isSelected={filtered === thread?.category}
                onClick={() => handleFilteredThreadByCategory(thread?.category)}
              >
                <span>#{thread?.category}</span>
              </FilterCategoryButton>
            </div>
          ))}
      </CategoriesList>
    </CategoriesContainer>
  );
};

const threadShape = {
  category: PropTypes.string.isRequired,
};

Categories.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string.isRequired,
  setFiltered: PropTypes.func.isRequired,
  isMobileMenuOpen: PropTypes.bool.isRequired,
};

export default Categories;
