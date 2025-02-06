import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LuSendHorizontal } from 'react-icons/lu';
import useInput from '../../hooks/useInput';
import Button from '../button/Button';
import CardThread from '../styled/CardThread';
import Container from '../styled/Container';
import Avatar from '../styled/Avatar';

const CommentForm = ({ onAddComment, authUser }) => {
  console.log(`auth user benerin komen loading ${authUser}`);
  const [isLoading, setIsLoading] =useState(false);
  const [comment, onCommentChange, handleResetComment] = useInput('');

  const onHandleComment = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await onAddComment({ comment });
      handleResetComment();
    } catch (error) {
      console.error('Failed to add comment:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <CardThread>

        <form onSubmit={onHandleComment} className="comment-form__form">
          <div className="comment-form__avatar">
            <Avatar src={authUser?.avatar} alt={authUser?.avatar} className='comment-form__avatar'/>
          </div>
          <div className="comment-form__text-area">
            <textarea
              className='comment-form__text-area-input'
              type='text'
              value={!comment? '' : comment}
              onChange={onCommentChange}
              placeholder='Answer Discussion'
              required />
          </div>
          <div className="comment-form__button">
            <Button type='submit' isLoading={isLoading}>
              <LuSendHorizontal/>
            </Button>
          </div>

        </form>

      </CardThread>

    </Container>
  );
};

CommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentForm;