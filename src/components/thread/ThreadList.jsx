import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ThreadItems from './materials/ThreadItems';

const ThreadList = ({ threads, filtered }) => {
  const { users = [] } = useSelector((states) => states);
  const filteredThreads = filtered ? threads.filter((t) => t.category === filtered) : threads;

  return (
    <div>
      {filteredThreads.map((thread) => (
        <ThreadItems key={thread.id} thread={thread} users={users} />
      ))}
    </div>
  );
};

ThreadList.propTypes = {
  threads: PropTypes.array.isRequired,
  filtered: PropTypes.string,
};

ThreadList.defaultProps = {
  filtered: '',
};

export default ThreadList;
