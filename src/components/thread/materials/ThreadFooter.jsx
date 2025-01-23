import React from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiSolidLike, BiDislike, BiSolidDislike, BiCommentDetail } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { postedAt } from '../../../utils';


const ThreadFooter = ({
  id,
  createdAt,
  upVotesBy,
  downVotesBy,
  onHandleUpVoteThread,
  onHandleDownVoteThread,
  onHandleNeutralizeVoteThread,
  totalComments,
  comments,
  isDetails
}) => {

  const { authUser }= useSelector((states)=> states);
  return (
    <div className="thread-footer">
      <div className="thread-footer__like-button">
        <button
          onClick={()=> {
            if (upVotesBy?.includes(authUser.id)){
              onHandleNeutralizeVoteThread(id);
              return;
            }
            onHandleUpVoteThread(id);
          }}
          type='button'
        >
          {
            upVotesBy?.includes(authUser?.id)
              ? (<BiSolidLike className='unlike-thread'/>)
              : (<BiLike className='like-thread'/>)
          }
        </button>
        <span className="span-count">
          {upVotesBy?.length || '0'}
        </span>
      </div>
      <div className="thread-footer__dislike-button">
        <button
          onClick={()=> {
            if (downVotesBy?.includes(authUser?.id)) {
              onHandleNeutralizeVoteThread(id);
              return;
            }
            onHandleDownVoteThread(id);
          }}
          type='button'
        >
          {
            downVotesBy?.includes(authUser?.id)
              ? (<BiSolidDislike className='dislike-thread'/>)
              : (<BiDislike className='undislike-thread'/>)
          }
        </button>
        <span className="span-count">
          {downVotesBy?.length || '0'}
        </span>
      </div>
      <div className="thread-footer__comment">
        <BiCommentDetail className='thread-footer__comment-icon'/>
        <span className="span-count">
          {
            isDetails ? (
              comments?.length || '0'
            ) : (
              totalComments || '0'
            )
          }
        </span>
        <div className="thread-footer__postedAt">
          <p>
            {postedAt(createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
};



ThreadFooter.defaultProps = {
  id: '',
  createdAt: '',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  comments: [],
};

ThreadFooter.propTypes = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  upVotesBy: PropTypes.arrayOf(PropTypes.string),
  downVotesBy: PropTypes.arrayOf(PropTypes.string),
  totalComments: PropTypes.number,
  comments: PropTypes.arrayOf(PropTypes.exact),
  isDetails: PropTypes.bool.isRequired,
  onHandleDownVoteThread: PropTypes.func.isRequired,
  onHandleUpVoteThread: PropTypes.func.isRequired,
  onHandleNeutralizeVoteThread: PropTypes.func.isRequired,
};

export default ThreadFooter;