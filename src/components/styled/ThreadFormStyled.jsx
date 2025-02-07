import styled from 'styled-components';
import Button from '../button/Button';

export const ThreadFormContainer = styled.div`
 width: 80%;
  margin: auto;
  padding: 1.5rem;
  border-radius: 8px;
  background: #fff;
  align-items: center;
  
`;

export const InputField = styled.input`
  width: 80%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

export const TextAreaField = styled.textarea`
  width: 80%;
  height: 120px;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

export const SubmitButton = styled(Button)`
  width: 30%;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  padding: 0.8rem;
  margin-top: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;
