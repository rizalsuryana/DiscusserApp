import styled from 'styled-components';

// ======================= Comment Form =======================
export const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CommentFormInner = styled.form`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  background: #fff;
  border-radius: 12px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  width: 100%;
  box-sizing: border-box;
`;

export const CommentAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentTextarea = styled.textarea`
  flex: 1;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 0.5rem;
  font-size: 0.95rem;
  outline: none;
  resize: none;
  transition: border 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
`;

export const CommentSubmitButton = styled.button`
  background: #3b82f6;
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    background: #2563eb;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// ======================= Comment List =======================
export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const CommentItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: #fff;
  padding: 0.75rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: background 0.2s;

  &:hover {
    background: #f0f8ff;
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  strong {
    font-size: 0.95rem;
    color: #333;
  }
`;

export const CommentAvatarSmall = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentContent = styled.div`
  font-size: 0.9rem;
  color: #4b5563;
  word-break: break-word;
`;

export const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: #6b7280;

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #3b82f6;
    font-size: 0.9rem;
    transition: color 0.2s;

    &:hover {
      color: #2563eb;
    }
  }

  span {
    display: flex;
    align-items: center;
  }
`;
