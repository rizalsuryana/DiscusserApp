import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postedAt } from '../../utils';
import { 
  asyncDownVoteComment, 
  asyncUpVoteComment, 
  asyncNeutralizeVoteComment 
} from '../../states/comments/action';
import parse from 'html-react-parser';

const CommentList = ({ comment }) => {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onHandleUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onHandleDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onHandleNeutralizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (!comment || !comment.owner) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
          src={comment?.owner?.avatar || '/default-avatar.png'}
          alt={comment?.owner?.name || 'User Avatar'}
          width="40"
          height="40"
        />
        <strong>{comment?.owner?.name}</strong>
      </div>

      <div>
        <p>{parse(comment?.content)}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => {
            if (comment?.upVotesBy?.includes(authUser.id)) {
              onHandleNeutralizeVoteComment(comment?.id);
              return;
            }
            onHandleUpVoteComment(comment?.id);
          }}
        >
          👍
        </button>
        <span>{comment?.upVotesBy?.length || '0'}</span>

        <button
          onClick={() => {
            if (comment?.downVotesBy?.includes(authUser.id)) {
              onHandleNeutralizeVoteComment(comment.id);
              return;
            }
            onHandleDownVoteComment(comment?.id);
          }}
        >
          👎
        </button>
        <span>{comment?.downVotesBy?.length || '0'}</span>

        <span>{postedAt(comment?.createdAt)}</span>
      </div>
    </div>
  );
};

const commentShape = {
  content: PropTypes.string,
  createdAt: PropTypes.string,
  upVotesBy: PropTypes.array,
  downVotesBy: PropTypes.array,
  owner: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

CommentList.defaultProps = {
  comment: {
    content: '',
    createdAt: '',
    upVotesBy: [],
    downVotesBy: [],
    owner: {
      name: '',
      avatar: '',
    },
  },
};

CommentList.propTypes = {
  comment: PropTypes.shape(commentShape),
};

export default CommentList;
