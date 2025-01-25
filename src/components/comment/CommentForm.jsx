import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LuSendHorizontal } from 'react-icons/lu';
import { useSelector } from 'react-redux';
import useInput from '../../hooks/useInput';
import Button from '../button/Button';
import Card from '../page-materials/Card';


const CommentForm = ({ onAddComment }) => {
  const { authUser = [] } = useSelector((states)=> states);
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
    <div className="comment-form">
      <Card.Body>
        <form onSubmit={onHandleComment} className="comment-form__form">
          <div className="comment-form__avatar">
            <img src={authUser?.avatar} alt={authUser?.avatar} className='comment-form__avatar'/>
          </div>
          <div className="comment-form__text-area">
            <textarea
              className='comment-form__text-area-input'
              type='text'
              value={!comment? '' : comment}
              onChange={onCommentChange}
              placeholder='Answer discussion'
              required />
          </div>
          <div className="comment-form__button">
            <Button type='submit' isLoading={isLoading}>
              <LuSendHorizontal/>
            </Button>
          </div>

        </form>
      </Card.Body>
    </div>
  );
};

CommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired
};

export default CommentForm;