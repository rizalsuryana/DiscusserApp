import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LuMessageCircle } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import ROUTE_PATH from '../config/routePaths';
import PageView from '../components/page-materials/PageView';
import Categories from '../components/page-materials/Categories';

const HomePage = () => {
  const { threads=[], filtered='' } = useSelector((states)=> states);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);
  return (
    <PageView>
      <div className="home-page">
        <div className="home-page-category">
          <Categories threads={threads} filtered={filtered}/>
        </div>
        <ThreadList threads={threads} filtered={filtered}/>
        <Link to={ROUTE_PATH.ADD_PAGE}>
          <div className="button-div" type='button'>
            <LuMessageCircle/>
          </div>
        </Link>
      </div>
    </PageView>
  );

};

export default HomePage;