import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LuSendHorizontal } from 'react-icons/lu';
import useInput from '../../hooks/useInput';
import * as UI from './CommentStyles';

const CommentForm = ({ onAddComment, authUser }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [comment, onCommentChange, handleResetComment] = useInput('');

  const onHandleComment = async (event) => {
    event.preventDefault();
    if (!comment.trim()) return;
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
    <UI.CommentFormContainer>
      <UI.CommentFormInner onSubmit={onHandleComment}>
        <UI.CommentAvatar src={authUser?.avatar} alt="User Avatar" />
        <UI.CommentTextarea
          value={comment}
          onChange={onCommentChange}
          placeholder="Answer Discussion"
          rows="2"
          required
        />
        <UI.CommentSubmitButton type="submit" disabled={isLoading}>
          <LuSendHorizontal size={20} />
        </UI.CommentSubmitButton>
      </UI.CommentFormInner>
    </UI.CommentFormContainer>
  );
};

CommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentForm;
