import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import Categories from '../components/page-materials/Categories';
import styled from 'styled-components';

const NAVBAR_HEIGHT = 60; // tinggi navbar desktop
const MOBILE_BOTTOM_HEIGHT = 70; // tinggi tombol like/dislike di mobile

const HomeContainer = styled.div`
  display: flex;
  gap: 1rem;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0; 
  }
`;

const Sidebar = styled.div`
  flex: 0 0 250px;  
  position: sticky;
  top: ${NAVBAR_HEIGHT}px;
  max-height: calc(100vh - ${NAVBAR_HEIGHT}px);
  overflow-y: auto;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    max-height: none;
    flex: 1 1 100%;
    padding: 0;
  }
`;

const MainContent = styled.div`
  flex: 1 1 0;
  width: 100%;
  box-sizing: border-box;

  /* desktop */
  @media (min-width: 769px) {
    padding-top: ${NAVBAR_HEIGHT}px;
  }

  /* mobile */
  @media (max-width: 768px) {
    padding-bottom: ${MOBILE_BOTTOM_HEIGHT}px;
  }
`;

const HomePage = () => {
  const { threads = [] } = useSelector((states) => states);
  const [filtered, setFiltered] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThreads());
  }, [dispatch]);

  return (
    <HomeContainer>
      <Sidebar>
        <Categories threads={threads} filtered={filtered} setFiltered={setFiltered} />
      </Sidebar>
      <MainContent>
        <ThreadList threads={threads} filtered={filtered} />
      </MainContent>
    </HomeContainer>
  );
};

export default HomePage;
