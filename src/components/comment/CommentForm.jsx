import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LuSendHorizontal } from 'react-icons/lu';
import useInput from '../../hooks/useInput';
import CardThread from '../styled/CardThread';
import Container from '../styled/Container';
import Avatar from '../styled/Avatar';
import styled from 'styled-components';

const CommentFormWrapper = styled.div`
  width: 100%;
  // padding: 0.5rem;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1rem;
  // border-radius: 25px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const TextAreaStyled = styled.textarea`
  flex: 1;
  min-height: 2rem;
  max-height: 6rem;
  padding: 1rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  resize: none;
  overflow-y: auto;
  background: #f0f2f5;
  margin-left: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const SendButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

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
    <Container>
      <CardThread>
        <CommentFormWrapper>
          <FormContainer onSubmit={onHandleComment}>
            <Avatar src={authUser?.avatar} alt="User Avatar" />
            <TextAreaStyled
              value={comment}
              onChange={onCommentChange}
              placeholder="Answer Discussion"
              rows="1"
              required
            />
            <SendButtonStyled type="submit" disabled={isLoading}>
              <LuSendHorizontal size={20} />
            </SendButtonStyled>
          </FormContainer>
        </CommentFormWrapper>
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
