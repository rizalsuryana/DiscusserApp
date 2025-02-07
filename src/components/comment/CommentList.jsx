import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postedAt } from '../../utils';
import { asyncDownVoteComment, asyncUpVoteComment, asyncNeutralizeVoteComment } from '../../states/comments/action';
import parse from 'html-react-parser';
import CardThread from '../styled/CardThread';
import Container from '../styled/Container';
import Avatar from '../styled/Avatar';
import { Flex } from '../styled/Flex';
import styled from 'styled-components';
import Icons from '../styled/Icons';
import ButtonIcon from '../styled/icons/ButtonIcon';
import { LikeIcon, LikedIcon } from '../styled/icons/LikeIcon';
import { Dislike, Disliked } from '../styled/icons/DislikeIcon';


const ListComment = styled.div`
margin: 1rem
`;
const NameComenter = styled.div`
margin-top: 0.5rem;
width: 100%;
height: 100%;
font-size : 1rem;
`;

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
    <Container>
      <CardThread>

        <>
          <ListComment>
            <Flex>
              <div className="comment-list__top">
                <Avatar
                  src={comment?.owner?.avatar || '/default-avatar.png'} // fallback image if avatar is not available
                  alt={comment?.owner?.name || 'User Avatar'}
                  className='comment-list__top-foto'
                />
              </div>
              <NameComenter>{comment?.owner?.name}</NameComenter>
            </Flex>
            <div className="comment-list__name">
              <p className="comment-list__content">
                {parse(comment?.content)}
              </p>
            </div>
            <Flex>
              <Icons>
                <ButtonIcon
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
                    ? (<LikedIcon/>)
                    : (<LikeIcon />)
                  }
                </ButtonIcon>
                <span className="span-count">
                  {comment?.upVotesBy?.length || '0'}
                </span>
              </Icons>
              <Icons>
                <ButtonIcon
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
                    ? (<Disliked />)
                    : (<Dislike />)
                  }
                </ButtonIcon>
                <span className="span-count">
                  {comment?.downVotesBy?.length || '0'}
                </span>
              </Icons>
              <div className="comment-list__createdAt">
                <p className="comment-list__createdAt-text">
                  {postedAt(comment?.createdAt)}
                </p>
              </div>
            </Flex>
          </ListComment>
        </>
      </CardThread>
    </Container>
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