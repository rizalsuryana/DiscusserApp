
import React from 'react';
import { BiLike, BiDislike, BiSolidLike, BiSolidDislike } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../page-materials/Card';
import { postedAt } from '../../utils';
import { asyncDownVoteComment, asyncUpVoteComment, asyncNeutralizeVoteComment } from '../../states/comments/action';
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
    return <div>Loading...</div>; // You can replace this with a better loading indicator
  }

  return (
    <div className='comment-list-card'>
      <Card.Body>
        <div className="comment-list">
          <div className="comment-list__top">
            <img
              src={comment?.owner?.avatar || '/default-avatar.png'} // fallback image if avatar is not available
              alt={comment?.owner?.name || 'User Avatar'}
              className='comment-list__top-foto'
            />
          </div>
          <div className="comment-list__name">
            <span className="comment-list__span-name">{comment?.owner?.name}</span>
            <p className="comment-list__content">
              {parse(comment?.content)}
            </p>
          </div>
        </div>
        <div className="comment-list__interaction">
          <div className="comment-list__like">
            <button
              onClick={() => {
                if (comment?.upVotesBy?.includes(authUser.id)) {
                  onHandleNeutralizeVoteComment(comment?.id);
                  return;
                }
                onHandleUpVoteComment(comment?.id);
              }}
              type='button'
            >
              {comment?.upVotesBy?.includes(authUser.id)
                ? (<BiSolidLike />)
                : (<BiLike />)
              }
            </button>
            <span className="span-count">
              {comment?.upVotesBy?.length || '0'}
            </span>
          </div>
          <div className="comment-list__dislike">
            <button
              onClick={() => {
                if (comment?.downVotesBy?.includes(authUser.id)) {
                  onHandleNeutralizeVoteComment(comment.id);
                  return;
                }
                onHandleDownVoteComment(comment?.id);
              }}
              type='button'
            >
              {comment?.downVotesBy?.includes(authUser.id)
                ? (<BiSolidDislike />)
                : (<BiDislike />)
              }
            </button>
            <span className="span-count">
              {comment?.downVotesBy?.length || '0'}
            </span>
          </div>
          <div className="comment-list__createdAt">
            <p className="comment-list__createdAt-text">
              {postedAt(comment?.createdAt)}
            </p>
          </div>
        </div>
      </Card.Body>
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
