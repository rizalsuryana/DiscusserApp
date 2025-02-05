import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/page-materials/Card';
import ThreadItems from '../components/thread/materials/ThreadItems';
import CommentList from '../components/comment/CommentList';
import CommentForm from '../components/comment/CommentForm';
import { asyncCreateComment } from '../states/comments/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    detailThread = {},
    users = [],
    comments = [],
    authUser,
  } = useSelector((states) => states);

  // Gunakan state lokal untuk menyimpan komentar terbaru
  const [localComments, setLocalComments] = useState(comments);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  useEffect(() => {
    setLocalComments(comments);
  }, [comments]);

  const onAddComment = async ({ comment }) => {
    const newComment = {
      id: `temp-${Date.now()}`, // Buat ID sementara
      content: comment,
      owner: authUser,
      createdAt: new Date().toISOString(),
      upVotesBy: [],
      downVotesBy: [],
    };

    //  Update state lokal langsung, tanpa menunggu Redux
    setLocalComments((prevComments) => [newComment, ...prevComments]);

    //  Dispatch Redux agar data tetap sinkron dengan backend
    await dispatch(asyncCreateComment({ threadId: id, comment }));
    dispatch(asyncReceiveThreadDetail(id)); // Ambil ulang data thread
  };

  if (!detailThread?.id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-thread">
      <div className="detail-thread-scroll">
        <Card>
          <ThreadItems isDetails threadDetail={detailThread} users={users} />
          <CommentForm authUser={authUser} comments={comments} onAddComment={onAddComment} />
          {localComments.map((comment) => (
            <CommentList key={comment?.id} comment={comment} />
          ))}
        </Card>
      </div>
    </div>
  );
};

export default DetailPage;
