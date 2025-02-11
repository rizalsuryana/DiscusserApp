import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import Categories from '../components/page-materials/Categories';
import Container from '../components/styled/Container';
// import Card from '../components/styled/Card';

const HomePage = () => {
  const { threads = [] } = useSelector((states) => states);
  const [filtered, setFiltered] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  return (
    <Container maxWidth='*80%'>
      {/* <Link className='floating-button' to={ROUTE_PATH.ADD_PAGE}>
        <BiSolidMessageAdd />
      </Link> */}
      <div className="home-page">
        <div className="home-page-category">
          <Categories threads={threads} filtered={filtered} setFiltered={setFiltered} />
        </div>
        <ThreadList threads={threads} filtered={filtered} />
      </div>
    </Container>
  );
};

export default HomePage;


