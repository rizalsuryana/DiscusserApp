// src/components/thread/materials/ThreadItems.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ThreadHeader from './ThreadHeader';
import ThreadTitle from './ThreadTitle';
import ThreadBody from './ThreadBody';
import ThreadFooter from './ThreadFooter';
import * as UI from '../ThreadStyle';
import {
  asyncDownVoteThread,
  asyncUpVoteThread,
  asyncNeutralizeVoteThread
} from '../../../states/threads/action';
import {
  asyncDownVoteThreadDetail,
  asyncUpVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail
} from '../../../states/threadDetail/action';

const ThreadItems = ({ thread, threadDetail, users, isDetails }) => {
  const dispatch = useDispatch();

  // Cari owner berdasarkan ownerId
  const handleUserDetails = (id) => users?.find((user) => user?.id === id) || {};

  // Vote handlers
  const onHandleUpVoteThread = (id) =>
    isDetails ? dispatch(asyncUpVoteThreadDetail(id)) : dispatch(asyncUpVoteThread(id));
  const onHandleDownVoteThread = (id) =>
    isDetails ? dispatch(asyncDownVoteThreadDetail(id)) : dispatch(asyncDownVoteThread(id));
  const onHandleNeutralizeVoteThread = (id) =>
    isDetails ? dispatch(asyncNeutralizeVoteThreadDetail(id)) : dispatch(asyncNeutralizeVoteThread(id));

  // Tentukan data thread dan owner
  const data = isDetails ? threadDetail : thread;
  const owner = isDetails ? threadDetail?.owner : handleUserDetails(data?.ownerId);

  return (
    <UI.ThreadContainer>
      <ThreadHeader
        avatar={owner?.avatar}
        name={owner?.name}
        createdAt={data?.createdAt}
        isDetails={isDetails}
      />
      <ThreadTitle
        id={data?.id}
        title={data?.title}
        category={data?.category}
        isDetails={isDetails}
      />
      <ThreadBody body={data?.body} longThread={isDetails} />
      <ThreadFooter
        id={data?.id}
        upVotesBy={data?.upVotesBy}
        downVotesBy={data?.downVotesBy}
        totalComments={data?.totalComments}
        comments={data?.comments}
        isDetails={isDetails}
        onHandleDownVoteThread={onHandleDownVoteThread}
        onHandleUpVoteThread={onHandleUpVoteThread}
        onHandleNeutralizeVoteThread={onHandleNeutralizeVoteThread}
      />
    </UI.ThreadContainer>
  );
};

ThreadItems.propTypes = {
  thread: PropTypes.object,
  threadDetail: PropTypes.object,
  users: PropTypes.array.isRequired,
  isDetails: PropTypes.bool,
};

ThreadItems.defaultProps = {
  isDetails: false,
  thread: {},
  threadDetail: {},
};

export default ThreadItems;
