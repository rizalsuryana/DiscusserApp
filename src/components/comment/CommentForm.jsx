import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LuSendHorizontal } from 'react-icons/lu';
import useInput from '../../hooks/useInput';

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
    <div>
      <form onSubmit={onHandleComment}>
        <img 
          src={authUser?.avatar} 
          alt="User Avatar" 
          width="40" 
          height="40" 
        />
        <textarea
          value={comment}
          onChange={onCommentChange}
          placeholder="Answer Discussion"
          rows="2"
          required
        />
        <button type="submit" disabled={isLoading}>
          <LuSendHorizontal size={20} />
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  onAddComment: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentForm;
