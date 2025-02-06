// import React from 'react';
// import PropTypes from 'prop-types';
// import { CategoriesContainer, FilterCategoryButton, MobileCategoriesMenu, MobileCategoriesButton } from '../../components/styled/Category';
// import Card from '../styled/Card';
// const Categories = ({ threads, filtered, setFiltered, isMobileMenuOpen }) => {
//   const handleFilteredThreadByCategory = (key) => {
//     if (filtered === key) {
//       setFiltered(''); // Reset filter jika kategori yang sama diklik
//     } else {
//       setFiltered(key); // Mengubah filter kategori jika kategori berbeda diklik
//     }
//   };

//   return (
//     <CategoriesContainer isMobileMenuOpen={isMobileMenuOpen}>
//       <h2>Categories:</h2>
//       <div className="filter-category">
//         {threads
//           ?.filter((value, index, item) => index === item.findIndex((temp) => temp?.category === value?.category))
//           .map((thread) => (
//             <div key={`${thread?.category}-${thread?.createdAt}`}>
//               <FilterCategoryButton
//                 isSelected={filtered === thread?.category}
//                 onClick={() => handleFilteredThreadByCategory(thread?.category)}
//               >
//                 <span>#{thread?.category}</span>
//               </FilterCategoryButton>
//             </div>
//           ))}
//       </div>

//       {/* Tampilan mobile dengan menu kategori */}
//       <MobileCategoriesMenu isMobileMenuOpen={isMobileMenuOpen}>
//         {threads
//           ?.filter((value, index, item) => index === item.findIndex((temp) => temp?.category === value?.category))
//           .map((thread) => (
//             <div key={`${thread?.category}-${thread?.createdAt}`}>
//               <MobileCategoriesButton
//                 onClick={() => handleFilteredThreadByCategory(thread?.category)}
//               >
//                 <span>#{thread?.category}</span>
//               </MobileCategoriesButton>
//             </div>
//           ))}
//       </MobileCategoriesMenu>
//     </CategoriesContainer>
//   );
// };

// const threadShape = {
//   category: PropTypes.string.isRequired,
// };

// Categories.propTypes = {
//   threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
//   filtered: PropTypes.string.isRequired,
//   setFiltered: PropTypes.func.isRequired,
//   isMobileMenuOpen: PropTypes.bool.isRequired,
// };

// export default Categories;
import React from 'react';
import PropTypes from 'prop-types';
import {
  CategoriesContainer,
  FilterCategoryButton,
  MobileCategoriesMenu,
} from '../../components/styled/Category'; // Import styling dari kategori

const Categories = ({ threads, filtered, setFiltered, isMobileMenuOpen }) => {
  const handleFilteredThreadByCategory = (key) => {
    setFiltered(filtered === key ? '' : key); // Jika kategori yang sama diklik lagi, reset
  };

  return (
    <CategoriesContainer isMobileMenuOpen={isMobileMenuOpen}>
      <h2>Categories:</h2>
      <div className="filter-category">
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
      </div>

      {/* Tampilan Mobile dengan menu kategori */}
      <MobileCategoriesMenu isMobileMenuOpen={isMobileMenuOpen}>
        {threads
          ?.filter((value, index, item) => index === item.findIndex((temp) => temp?.category === value?.category))
          .map((thread) => (
            <div key={`${thread?.category}-${thread?.createdAt}`}>
              <FilterCategoryButton
                onClick={() => handleFilteredThreadByCategory(thread?.category)}
              >
                <span>#{thread?.category}</span>
              </FilterCategoryButton>
            </div>
          ))}
      </MobileCategoriesMenu>
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
