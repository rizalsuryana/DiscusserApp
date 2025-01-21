import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { arrayOf } from 'prop-types';
import Card from '../../page-materials/Card';
import ThreadHeader from './ThreadHeader';
import ThreadTitle from './ThreadTitle';
import ThreadBody from './ThreadBody';
import ThreadFooter from './ThreadFooter';
import { asyncDownVoteThread, asyncUpVoteThread, asyncNeutralizeVoteThread } from '../../../states/threads/action';
import { asyncDownVoteThreadDetail, asyncUpVoteThreadDetail, asyncNeutralizeVoteThreadDetail } from '../../../states/threadDetail/action';

const ThreadItems = (attributes) => {
  const { threadDetail, threads, isDetails, users } = attributes;

  const dispatch = useDispatch();
  const handleUserDetails = (id) => users?.filter((user)=> user?.id === id)[0];

  const onHandleUpVoteThread = (id) => {
    if (isDetails){
      dispatch(asyncUpVoteThreadDetail(id));
      return;
    }
    dispatch(asyncUpVoteThread(id));
  };

  const onHandleDownVoteThread = (id) => {
    if (isDetails){
      dispatch(asyncDownVoteThreadDetail(id));
      return;
    }
    dispatch(asyncDownVoteThread);
  };

  const onHandleNeutralizeVoteThread = (id) => {
    if (isDetails){
      dispatch(asyncNeutralizeVoteThreadDetail(id));
      return;
    }
    dispatch(asyncNeutralizeVoteThread(id));
  };

  return (
    <div className="thread list">
      {
        isDetails? (
          <ThreadHeader
            avatar={threadDetail?.owner?.avatar}
            name={threadDetail?.owner?.name}
            id={threadDetail?.id}
            isDetails={isDetails}
          />
        )
          : (
            <ThreadHeader
              avatar={handleUserDetails(threads?.ownerId)?.avatar}
              name={handleUserDetails(threads?.ownerId)?.name}
              id={threads?.id}
              isDetails={isDetails}
            />
          )
      }
      <Card.Title>
        {
          isDetails? (
            <ThreadTitle
              title={threadDetail?.title}
              category={threadDetail?.category}
              isDetails={isDetails}
            />
          ) : (
            <ThreadTitle
              title={threads?.title}
              category={threads?.category}
              isDetails={isDetails}
            />
          )
        }
      </Card.Title>
      <Card.Body>
        {
          isDetails? (
            <ThreadBody body={threadDetail?.body} longThread={isDetails}/>
          ): (
            <ThreadBody body={threads?.body}/>
          )
        }
      </Card.Body>
      <Card.Footer>
        {
          isDetails? (
            <ThreadFooter
              id={threadDetail?.id}
              createdAt={threadDetail?.createdAt}
              upVotesBy={threadDetail?.upVotesBy}
              downVotesBy={threadDetail.downVotesBy}
              isDetails={isDetails}
              comments={threadDetail?.comments}
              onHandleDownVoteThread={onHandleDownVoteThread}
              onHandleUpVoteThread={onHandleUpVoteThread}
              onHandleNeutralizeVoteThread={onHandleNeutralizeVoteThread}
            />
          ) : (
            <ThreadFooter
              id={threads?.id}
              createdAt={threads?.createdAt}
              upVotesBy={threads?.upVotesBy}
              downVotesBy={threads.downVotesBy}
              isDetails={isDetails}
              onHandleDownVoteThread={onHandleDownVoteThread}
              onHandleUpVoteThread={onHandleUpVoteThread}
              onHandleNeutralizeVoteThread={onHandleNeutralizeVoteThread}
              totalComments={threads?.totalComments}
            />
          )
        }
      </Card.Footer>
    </div>
  );

};


const userAray = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string
};

const threadsShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  totalComments: PropTypes.number,
};

const threadShape = {
  title: PropTypes.string,
  body: PropTypes.string,
  ownerId: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  comments: PropTypes.array
};


ThreadItems.propTypes = {
  threadDetail: PropTypes.shape(threadShape),
  threads: PropTypes.shape(threadsShape),
  users: arrayOf(PropTypes.shape(userAray)).isRequired,
  isDetails: PropTypes.bool,
};


ThreadItems.defaultProps = {
  isDetails: false,
  threadDetail: {
    title: '',
    ownerId: '',
    body: '',
    upVotesBy: [],
    downVotesBy: [],
  },
  threads: {
    title: '',
    ownerId: '',
    body: '',
    upVotesBy: [],
    downVotesBy: [],
  }
};

export default ThreadItems;