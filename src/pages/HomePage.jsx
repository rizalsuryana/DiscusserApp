import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import Categories from '../components/page-materials/Categories';
import { Link } from 'react-router-dom';
import ROUTE_PATH from '../config/routePaths';
import { BiSolidMessageAdd } from 'react-icons/bi';

const HomePage = () => {
  const { threads = [] } = useSelector((states) => states);
  const [filtered, setFiltered] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  return (
    <div>
      <Link className='floating-button' to={ROUTE_PATH.ADD_PAGE}>
        <BiSolidMessageAdd />
      </Link>
      <div className="home-page">
        <div className="home-page-category">
          <Categories threads={threads} filtered={filtered} setFiltered={setFiltered} />
        </div>
        <ThreadList threads={threads} filtered={filtered} />
      </div>
    </div>
  );
};

export default HomePage;
