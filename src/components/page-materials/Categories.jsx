// import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { setFilteredActionCreator } from '../../states/filters/action';

// const Categories = (attributes) => {
//   const { threads, filtered } = attributes;

//   const dispatch = useDispatch();

//   const handleFilteredThereadByCategories = (key) => {
//     dispatch(setFilteredActionCreator(key));
//   };

//   return (
//     <div className="categories">
//       <h2>Categories:</h2>
//       <div className="filter-category">
//         {
//           threads?.filter((value, index, item)=> index === item.findIndex((temp)=>(
//             temp?.category === value?.category
//           )))?.map((thread)=> (
//             <div key={`${thread?.category}-${thread?.createdAt}`}
//             >
//               <button
//                 onClick={()=> handleFilteredThereadByCategories(thread?.category)}
//                 type='button'
//                 className={`${filtered=== thread?.category? 'filtered-black' : 'filtered-white'} `}
//               >
//                 <span>
//                     #{thread?.category}
//                 </span>

//               </button>

//             </div>

//           ))
//         }
//       </div>
//     </div>
//   );
// };


// const threadShape = {
//   category: PropTypes.string.isRequired
// };

// Categories.propTypes = {
//   threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
//   filtered: PropTypes.string.isRequired
// };

// export default Categories;

import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ threads, filtered, setFiltered }) => {
  const handleFilteredThreadByCategory = (key) => {
    setFiltered(key); // Mengubah filter kategori
  };

  const handleResetFilter = () => {
    setFiltered(''); // Reset filter ke kosong untuk menampilkan semua thread
  };

  return (
    <div className="categories">
      <h2>Categories:</h2>
      <button
        onClick={handleResetFilter}
        className="reset-filter-button"
      >
        Reset
      </button>
      <div className="filter-category">
        {
          threads?.filter((value, index, item) => index === item.findIndex((temp) => temp?.category === value?.category))
            .map((thread) => (
              <div key={`${thread?.category}-${thread?.createdAt}`}>
                <button
                  onClick={() => handleFilteredThreadByCategory(thread?.category)}
                  type='button'
                  className={`${filtered === thread?.category ? 'filtered-black' : 'filtered-white'}`}
                >
                  <span>
                    #{thread?.category}
                  </span>
                </button>
              </div>
            ))
        }
      </div>
    </div>
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

