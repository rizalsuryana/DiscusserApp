import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/page-materials/Card';
import PageView from '../components/page-materials/PageView';
import ThreadItems from '../components/thread/materials/ThreadItems';
import CommentList from '../components/comment/CommentList';
import CommentForm from '../components/comment/CommentForm';
import { asyncCreateComment } from '../states/comments/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

const DetailPage = () => {
  const { id } = useParams();

  const {
    detailThread = [],
    users = [],
    comments = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const onAddComment = ({ comment }) => {
    const payload = {
      threadId: id,
      comment,
    };
    dispatch(asyncCreateComment(payload));
    dispatch(asyncReceiveThreadDetail(id));
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  return (
    <PageView>
      <div className="detail-thread">
        <div className="detail-thread-scroll">
          <Card>
            <ThreadItems isDetails threadDetail={detailThread} users={users} />
            <CommentForm comments={comments} onAddComment={onAddComment} />
            {comments?.map((comment) => (
              <CommentList key={comment?.id} comment={comment} />
            ))}
          </Card>
        </div>
      </div>
    </PageView>
  );
};

export default DetailPage;
