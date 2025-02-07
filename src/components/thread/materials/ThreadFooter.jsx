import React from 'react';
import PropTypes from 'prop-types';
import { BiCommentDetail } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Flex } from '../../styled/Flex';
import Icons from '../../styled/Icons';
import ButtonIcon from '../../styled/icons/ButtonIcon';
import { LikeIcon, LikedIcon } from '../../styled/icons/LikeIcon';
import { Dislike, Disliked } from '../../styled/icons/DislikeIcon';
import styled from 'styled-components';

const Comment = styled(BiCommentDetail)`
font-size: 1.2rem;
  &:hover {
    color: Black;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;



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
  const { authUser }= useSelector((states)=> states);
  return (
    <Flex>
      <Icons>
        <ButtonIcon
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
              ? (<LikedIcon/>)
              : (<LikeIcon/>)
          }
        </ButtonIcon>
        <span className="span-count">
          {upVotesBy?.length || '0'}
        </span>
      </Icons>
      <Icons>
        <ButtonIcon
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
              ? (<Disliked/>)
              : (<Dislike/>)
          }
        </ButtonIcon>
        <span className="span-count">
          {downVotesBy?.length || '0'}
        </span>
      </Icons>
      <Icons
        onClick={() => navigate(`/thread/${id}`)}
        style={{ cursor: 'pointer' }}
      >
        <Comment/>
        <span className="span-count">
          {
            isDetails ? (
              comments?.length || '0'
            ) : (
              totalComments || '0'
            )
          }
        </span>
      </Icons>
    </Flex>
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