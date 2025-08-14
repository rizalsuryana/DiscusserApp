// HomePage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadList from '../components/thread/ThreadList';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import Categories from '../components/page-materials/Categories';
import styled from 'styled-components';

const NAVBAR_HEIGHT = 60;
const MOBILE_NAVBAR_HEIGHT = 60;

const HomeContainer = styled.div`
  display: flex;
  gap: 1rem;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;  /* hapus padding di mobile supaya kategori nempel atas */
  }
`;

const Sidebar = styled.div`
  flex: 0 0 250px;  
  max-height: 100vh;
  overflow: hidden;
  position: sticky;
  top: ${NAVBAR_HEIGHT}px;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-height: none;
    position: relative;
    top: 0;   /* kategori di mobile nempel paling atas */
  }
`;

const MainContent = styled.div`
  flex: 1 1 0;
  width: 100%;
  padding-bottom: ${MOBILE_NAVBAR_HEIGHT + 16}px;

  @media (min-width: 769px) {
    padding-top: ${NAVBAR_HEIGHT}px;
  }

  @media (max-width: 768px) {
    padding-top: 0; /* hilangkan padding atas di mobile */
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
