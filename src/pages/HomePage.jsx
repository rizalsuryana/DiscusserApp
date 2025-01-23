import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
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
      </div>
    </PageView>
  );

};

export default HomePage;