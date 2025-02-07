import styled from 'styled-components';

const ButtonIcon = styled.button`
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

export default ButtonIcon;
