import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Card from '../page-materials/Card';
import ThreadItems from './materials/ThreadItems';

const ThreadList = ({ threads, filtered }) =>  {

  const { users = [] } = useSelector((states)=>states);

  if (!filtered){
    return (
      <div className="thread-list">
        <div className="thread-list__container">
          {
            threads?.map((thread)=> (
              <Card className='thread-list__filtered' key={`${thread?.id}-filtered`}>
                <ThreadItems key={thread?.id} threads={thread} users={users}/>
              </Card>
            ))
          }
        </div>
      </div>
    );
  }
  return (
    <div className="thread-list">
      <div className="thread-list__container">
        {
          threads?.filter((threadFilter)=> threadFilter?.category === filtered).map((thread)=>(
            <Card className='thread-list__card' key={thread?.id}>
              <ThreadItems key={thread?.id} threads={thread} users={users}/>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

const threadShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotes: PropTypes.array,
  downVOteBy: PropTypes.array,
  totalComments : PropTypes.number,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
  filtered: PropTypes.string,
};

ThreadList.defaultProps = {
  filtered: ''
};

export default ThreadList;