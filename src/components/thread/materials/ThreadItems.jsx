import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes, { arrayOf } from 'prop-types';
import ThreadHeader from './ThreadHeader';
import ThreadTitle from './ThreadTitle';
import ThreadBody from './ThreadBody';
import ThreadFooter from './ThreadFooter';
import { asyncDownVoteThread, asyncUpVoteThread, asyncNeutralizeVoteThread } from '../../../states/threads/action';
import { asyncDownVoteThreadDetail, asyncUpVoteThreadDetail, asyncNeutralizeVoteThreadDetail } from '../../../states/threadDetail/action';
import Container from '../../styled/Container';
import CardThread from '../../styled/CardThread';
import styled from 'styled-components';

const DetailView = styled.div`
margin: 1rem;
`;


const ThreadItems = ({ threadDetail, threads, isDetails, users }) => {
  const dispatch = useDispatch();
  const handleUserDetails = (id) => users?.find((user) => user?.id === id) || {};

  const onHandleUpVoteThread = (id) => {
    if (isDetails) {
      dispatch(asyncUpVoteThreadDetail(id));
    } else {
      dispatch(asyncUpVoteThread(id));
    }
  };

  const onHandleDownVoteThread = (id) => {
    if (isDetails) {
      dispatch(asyncDownVoteThreadDetail(id));
    } else {
      dispatch(asyncDownVoteThread(id));
    }
  };

  const onHandleNeutralizeVoteThread = (id) => {
    if (isDetails) {
      dispatch(asyncNeutralizeVoteThreadDetail(id));
    } else {
      dispatch(asyncNeutralizeVoteThread(id));
    }
  };

  const content = (
    <>
      <ThreadHeader
        avatar={isDetails ? threadDetail?.owner?.avatar : handleUserDetails(threads?.ownerId)?.avatar}
        name={isDetails ? threadDetail?.owner?.name : handleUserDetails(threads?.ownerId)?.name}
        id={isDetails ? threadDetail?.id : threads?.id}
        isDetails={isDetails}
        createdAt={isDetails ? threadDetail?.createdAt : threads?.createdAt}

      />
      <ThreadTitle
        id={isDetails ? threadDetail?.id : threads?.id}
        title={isDetails ? threadDetail?.title : threads?.title}
        category={isDetails ? threadDetail?.category : threads?.category}
        isDetails={isDetails}
      />
      <ThreadBody body={isDetails ? threadDetail?.body : threads?.body} longThread={isDetails} />
      <ThreadFooter
        id={isDetails ? threadDetail?.id : threads?.id}
        upVotesBy={isDetails ? threadDetail?.upVotesBy : threads?.upVotesBy}
        downVotesBy={isDetails ? threadDetail.downVotesBy : threads.downVotesBy}
        isDetails={isDetails}
        comments={isDetails ? threadDetail?.comments : undefined}
        totalComments={!isDetails ? threads?.totalComments : undefined}
        onHandleDownVoteThread={onHandleDownVoteThread}
        onHandleUpVoteThread={onHandleUpVoteThread}
        onHandleNeutralizeVoteThread={onHandleNeutralizeVoteThread}
      />
    </>
  );

  return <Container>{isDetails ? <CardThread><DetailView>{content}</DetailView></CardThread> : content}</Container>;
};

const userAray = {
  id: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
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
  comments: PropTypes.array,
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
  },
};

export default ThreadItems;
