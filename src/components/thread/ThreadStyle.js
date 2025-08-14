// src/components/thread/materials/ThreadStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ==================== Thread Container ====================
export const ThreadContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

// ==================== Thread Header ====================
export const ThreadHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  color: #495057;

  span:first-child {
    font-weight: 600;
    color: #212529;
  }
`;

// ==================== Thread Title ====================
export const ThreadTitleContainer = styled.div`
  margin: 0.5rem 0;

  h2 {
    font-size: 1.1rem;
    margin: 0;
    color: #212529;
  }

  div {
    font-size: 0.85rem;
    color: #868e96;
    margin-top: 0.25rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

// ==================== Thread Body ====================
export const ThreadBodyContainer = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  ${({ longThread }) =>
    longThread
      ? `
    white-space: normal;
    display: block;
  `
      : `
    -webkit-line-clamp: 3; 
    max-height: 4.5em;
  `}

  @media (max-width: 480px) {
    ${({ longThread }) =>
    !longThread &&
      `
      -webkit-line-clamp: 4;
      max-height: 6em;
  `}
  }
`;

// ==================== Thread Footer ====================
export const ThreadFooterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #495057;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    color: ${({ active }) => (active ? '#007bff' : '#495057')};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0;

    &:hover {
      color: #007bff;
    }
  }

  svg {
    font-size: 1.2rem;
  }
`;

// ==================== Thread Form ====================


export const ThreadFormContainer = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  max-width: 700px;
  margin: 2rem auto;
  box-sizing: border-box;
  width: 100%;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #212529;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input,
    textarea {
      width: 100%;
      padding: 0.85rem 0.75rem;
      font-size: 1rem;
      border-radius: 8px;
      border: 1px solid #ced4da;
      background: #fff;
      box-sizing: border-box;
      resize: vertical;
      transition: all 0.2s;

      &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 3px rgba(0,123,255,0.15);
      }
    }

    button {
      padding: 0.75rem 1.5rem;
      background: linear-gradient(135deg, #007bff, #0056b3);
      color: #fff;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 1rem;
      width: 150px;
      align-self: flex-start;
      transition: all 0.3s;

      &:hover {
        background: linear-gradient(135deg, #0056b3, #007bff);
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;

    button {
      width: 100%;
    }
  }
`;


// ==================== Reusable Link ====================
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
