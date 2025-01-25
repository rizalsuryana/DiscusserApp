import React from 'react';
import  LoadingBar  from 'react-redux-loading-bar';

const Loading = () => {
  return (
    <div className="loading-discusser">
      <LoadingBar progressIncrease={1} showFastActions updateTime={100}/>
    </div>
  );
};

export default Loading;