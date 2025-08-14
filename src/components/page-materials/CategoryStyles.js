// CategoryStyles.js
import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0;  
    margin: 0;  /* hilangkan margin atas */
    border-radius: 0;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
  }
`;

export const CategoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h3 {
    margin: 0;
    font-size: 1rem;
    color: #495057;
  }
`;

export const ClearFilter = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;

  &:hover {
    color: #dc3545;
    text-decoration: underline;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 0 1rem 0.5rem;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CategoryItem = styled.button`
  padding: 0.4rem 0.8rem;
  background: ${({ active }) => active ? '#e3f2fd' : '#fff'};
  border: 1px solid ${({ active }) => active ? '#2196f3' : '#dee2e6'};
  border-radius: 20px;
  color: ${({ active }) => active ? '#2196f3' : '#495057'};
  font-size: 0.85rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    background: ${({ active }) => active ? '#d1e9ff' : '#f8f9fa'};
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
  }
`;
