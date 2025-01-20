import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { ThreadItemShape } from './ThreadItem';

const ThreadList = ({ threads, like, dislike, neutralLike, neutralDislike }) => {
  return (
    <div className="threads-list">
      {threads.map((thread)=>(
        <ThreadItem
          key={thread.id}
          {...thread}
          like={like}
          dislike={dislike}
          neutralLike={neutralLike}
          neutralDislike={neutralDislike}
        />
      ))}
    </div>
  );
};

ThreadList.propTypes ={
  threads: PropTypes.arrayOf(PropTypes.shape(ThreadItemShape)).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralLike: PropTypes.func.isRequired,
  neutralDislike: PropTypes.func.isRequired,
};


export default ThreadList;