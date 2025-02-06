// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import ThreadList from '../components/thread/ThreadList';
// import { asyncPopulateUserAndThreads } from '../states/shared/action';
// import Categories from '../components/page-materials/Categories';
// import { Link } from 'react-router-dom';
// import ROUTE_PATH from '../config/routePaths';
// import { BiSolidMessageAdd } from 'react-icons/bi';
// import Container from '../components/styled/Container';
// import Card from '../components/styled/Card';

// const HomePage = () => {
//   const { threads = [] } = useSelector((states) => states);
//   const [filtered, setFiltered] = useState('');

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(asyncPopulateUserAndThreads());
//   }, [dispatch]);

//   return (
//     <Container maxWidth='*80%'>
//       <Link className='floating-button' to={ROUTE_PATH.ADD_PAGE}>
//         <BiSolidMessageAdd />
//       </Link>
//       <div className="home-page">
//         <div className="home-page-category">
//           <Categories threads={threads} filtered={filtered} setFiltered={setFiltered} />
//         </div>
//         <ThreadList threads={threads} filtered={filtered} />
//       </div>
//     </Container>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import Categories from '../components/page-materials/Categories';
import { Link } from 'react-router-dom';
import ROUTE_PATH from '../config/routePaths';
import { BiSolidMessageAdd } from 'react-icons/bi';
import Container from '../components/styled/Container';

const HomePage = () => {
  const { threads = [] } = useSelector((states) => states);
  const [filtered, setFiltered] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container maxWidth="80%">
      <Link className="floating-button" to={ROUTE_PATH.ADD_PAGE}>
        <BiSolidMessageAdd />
      </Link>
      <div className="home-page">
        <Categories
          threads={threads}
          filtered={filtered}
          setFiltered={setFiltered}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <ThreadList threads={threads} filtered={filtered} />
      </div>
    </Container>
  );
};

export default HomePage;
