import React from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiDislike, BiComment } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

const ThreadItem = ({ id, user, title, body, category, createdAt, upVotesBy,
  downVotesBy, totalComments, authUser, like, dislike, neutralLike, neutralDislike }) => {

  const navigate = useNavigate('');
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked){
      like(id);
    } else if (isThreadDisliked){
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked){
      neutralLike(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadDisliked && isThreadLiked){
      dislike(id);
    } else if (isThreadDisliked){
      neutralDislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      like(id);
    }
  };

  const onThreadClick = (event) => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' '){
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div role='button' tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item__user-photo">
        <img src={user.avatar} alt={user}/>
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{user.name}</p>
            <p className="thread-item__user-id">
                @
              {user.id}
            </p>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <h1 className='thread-item__title'>{title}</h1>
          <p className='thread-item__category'>{category}</p>
          <p className="thread-item__text">{body}</p>
        </article>
        {
          like && (
            <div className="thread-item__vote">
              <p>
                <button type='button' aria-label='like' onClick={onLikeClick}>
                  {isThreadLiked ? <BiLike style={{ color: 'yellow' }}/> : <BiLike/>}
                </button>
                {isThreadLiked? <span style={{ color: 'black' }}>{upVotesBy.length}</span>
                  : <span style={upVotesBy.length}></span>
                }
              </p>
              <p>
                <button type='button' aria-label='dislike' onClick={onDislikeClick}>
                  {isThreadDisliked? <BiDislike style={{ color: 'red' }}/> : <BiDislike/>}
                </button>
                { isThreadDisliked ? <span style={{ color: 'black' }}>{downVotesBy.length}</span>
                  : <span style={downVotesBy.length}></span>
                }
              </p>
              <p>
                <button type='button' onClick={onThreadClick} onKeyDown={onkeydown}>
                  <BiComment/>
                </button>
                {totalComments}
              </p>
            </div>
          )
        }
      </div>


    </div>
  );

};

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  emai: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const ThreadItemShape ={
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired
};

ThreadItem.propTypes = {
  ...ThreadItemShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func
};

ThreadItem.defaultProps = {
  like: null,
  dislike: null,
  neutralLike: null,
  neutralDislike: null,
};

export { ThreadItemShape };
export default ThreadItem;