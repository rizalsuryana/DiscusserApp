import React from 'react';
import { useLocation } from 'react-router-dom';

const PagesInfo = () => {
  const location = useLocation();
  const getPageInfo = () => {
    switch (location.pathname) {
    case '/':
      return 'Home';
    case '/add-thread':
      return 'Create Post';
    case '/leader-boards':
      return 'Leaderboard';
    default:
      if (location.pathname.startsWith('/thread/')) {
        return 'Discussion';
      }
      return 'Page Not Found';
    }
  };

  return (
    <div className='page-info'>
      <h1>{getPageInfo()}</h1>
    </div>
  );
};

export default PagesInfo;
