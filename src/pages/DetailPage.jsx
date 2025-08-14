import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ThreadItems from '../components/thread/materials/ThreadItems';
import CommentList from '../components/comment/CommentList';
import CommentForm from '../components/comment/CommentForm';
import { asyncCreateComment } from '../states/comments/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const DetailPageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;

  /* Desktop: beri margin top supaya tidak ketutupan navbar */
  @media (min-width: 769px) {
    margin-top: 4rem; /* sesuaikan tinggi navbar */
  }

  /* Mobile: beri margin bottom supaya komentar terakhir aman */
  @media (max-width: 768px) {
    padding: 0.5rem;
    margin-bottom: 5rem; /* cukup untuk tombol like/comment terakhir */
  }
`;

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    detailThread = {},
    users = [],
    comments = [],
    authUser,
  } = useSelector((states) => states);

  const [localComments, setLocalComments] = useState(comments);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  useEffect(() => {
    setLocalComments(comments);
  }, [comments]);

  const onAddComment = async ({ comment }) => {
    const newComment = {
      id: `temp-${Date.now()}`,
      content: comment,
      owner: authUser,
      createdAt: new Date().toISOString(),
      upVotesBy: [],
      downVotesBy: [],
    };

    setLocalComments((prevComments) => [newComment, ...prevComments]);

    await dispatch(asyncCreateComment({ threadId: id, comment }));
    dispatch(asyncReceiveThreadDetail(id));
  };

  if (!detailThread?.id) {
    return <div>Loading...</div>;
  }

  return (
    <DetailPageContainer>
      <ThreadItems isDetails threadDetail={detailThread} users={users} />
      <CommentForm authUser={authUser} onAddComment={onAddComment} />
      {localComments.map((comment) => (
        <CommentList key={comment?.id} comment={comment} />
      ))}
    </DetailPageContainer>
  );
};

export default DetailPage;
