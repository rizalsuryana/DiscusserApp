import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/page-materials/Loading';
import { LoadingBar } from 'react-redux-loading-bar';
import Navbar from './components/navigate/Navbar';
import ROUTE_PATH from './config/routePaths';
import AddThread from './pages/AddThread';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import LeaderBoards from './pages/LeaderBoards';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';
import PagesInfo from './components/page-materials/Pagesinfo';
import './styles/style.css';

const App = () => {
  const { authUser = null, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return (
      <div className="loading-div">
        <Loading />
      </div>
    );
  }

  if (authUser === null) {
    return (
      <>
        <LoadingBar />
        <Loading />
        <main>
          <Routes>
            <Route path='/*' element={<LoginPage />} />
            <Route path={ROUTE_PATH.REGISTER_PAGE} element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <div>
      <Loading />
      <Navbar authUser={authUser} signOut={onSignOut} />
      <div className="div-main">
        <main>
          <PagesInfo />
          <Routes>
            <Route path={ROUTE_PATH.HOME_PAGE} element={<HomePage />} />
            <Route path={ROUTE_PATH.DETAIL_PAGE} element={<DetailPage />} />
            <Route path={ROUTE_PATH.ADD_PAGE} element={<AddThread />} />
            <Route path={ROUTE_PATH.LEADER_BOARDS_PAGE} element={<LeaderBoards />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
