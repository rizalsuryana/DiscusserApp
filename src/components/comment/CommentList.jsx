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
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from 'react-icons/ai';
import * as UI from './CommentStyles';

const CommentList = ({ comment }) => {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const isLiked = comment?.upVotesBy?.includes(authUser.id);
  const isDisliked = comment?.downVotesBy?.includes(authUser.id);

  const onHandleUpVoteComment = (id) => {
    dispatch(asyncUpVoteComment(id));
  };

  const onHandleDownVoteComment = (id) => {
    dispatch(asyncDownVoteComment(id));
  };

  const onHandleNeutralizeVoteComment = (id) => {
    dispatch(asyncNeutralizeVoteComment(id));
  };

  if (!comment || !comment.owner) return <div>Loading...</div>;

  return (
    <UI.CommentContainer>
      <UI.CommentItem>
        <UI.CommentHeader>
          <UI.CommentAvatarSmall
            src={comment?.owner?.avatar || '/default-avatar.png'}
            alt={comment?.owner?.name || 'User Avatar'}
          />
          <strong>{comment?.owner?.name}</strong>
        </UI.CommentHeader>

        <UI.CommentContent>{parse(comment?.content)}</UI.CommentContent>

        <UI.CommentFooter>
          {/* Like */}
          <button
            onClick={() => {
              if (isLiked) return onHandleNeutralizeVoteComment(comment?.id);
              onHandleUpVoteComment(comment?.id);
            }}
            style={{ color: isLiked ? '#007bff' : '#495057' }}
          >
            {isLiked ? <AiFillLike size={18} /> : <AiOutlineLike size={18} />}
          </button>
          <span>{comment?.upVotesBy?.length || 0}</span>

          {/* Dislike */}
          <button
            onClick={() => {
              if (isDisliked) return onHandleNeutralizeVoteComment(comment?.id);
              onHandleDownVoteComment(comment?.id);
            }}
            style={{ color: isDisliked ? '#007bff' : '#495057' }}
          >
            {isDisliked ? <AiFillDislike size={18} /> : <AiOutlineDislike size={18} />}
          </button>
          <span>{comment?.downVotesBy?.length || 0}</span>

          <span>{postedAt(comment?.createdAt)}</span>
        </UI.CommentFooter>
      </UI.CommentItem>
    </UI.CommentContainer>
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
