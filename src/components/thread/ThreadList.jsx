import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ThreadItems from './materials/ThreadItems';
import Grid from '../styled/Grid';
import Card from '../styled/Card';
const ThreadList = ({ threads, filtered }) =>  {

  const { users = [] } = useSelector((states)=>states);

  if (!filtered){
    return (
      <div className="thread-list">
        <Grid>
          {
            threads?.map((thread)=> (
              <Card className='thread-list__filtered' key={`${thread?.id}-filtered`}>
                <ThreadItems key={thread?.id} threads={thread} users={users}/>
              </Card>
            ))
          }
        </Grid>
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