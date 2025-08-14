import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as UI from '../ThreadStyle';

const ThreadFooter = ({
  id,
  upVotesBy,
  downVotesBy,
  onHandleUpVoteThread,
  onHandleDownVoteThread,
  onHandleNeutralizeVoteThread,
  totalComments,
  comments,
  isDetails
}) => {
  const navigate = useNavigate();
  const { authUser } = useSelector((states) => states);

  const isLiked = upVotesBy?.includes(authUser?.id);
  const isDisliked = downVotesBy?.includes(authUser?.id);

  return (
    <UI.ThreadFooterContainer>
      <UI.FooterItem active={isLiked}>
        <button
          onClick={() => {
            if (isLiked) return onHandleNeutralizeVoteThread(id);
            onHandleUpVoteThread(id);
          }}
        >
          {isLiked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
        </button>
        <span>{upVotesBy?.length || 0}</span>
      </UI.FooterItem>

      <UI.FooterItem active={isDisliked}>
        <button
          onClick={() => {
            if (isDisliked) return onHandleNeutralizeVoteThread(id);
            onHandleDownVoteThread(id);
          }}
        >
          {isDisliked ? <AiFillDislike size={20} /> : <AiOutlineDislike size={20} />}
        </button>
        <span>{downVotesBy?.length || 0}</span>
      </UI.FooterItem>

      <UI.FooterItem onClick={() => navigate(`/thread/${id}`)} style={{ cursor: 'pointer' }}>
        <BiCommentDetail size={20} />
        <span>{isDetails ? comments?.length || 0 : totalComments || 0}</span>
      </UI.FooterItem>
    </UI.ThreadFooterContainer>
  );
};

ThreadFooter.defaultProps = {
  id: '',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
  comments: [],
};

ThreadFooter.propTypes = {
  id: PropTypes.string.isRequired,
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
