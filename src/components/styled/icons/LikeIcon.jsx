import styled from 'styled-components';
import { BiLike, BiSolidLike } from 'react-icons/bi';

const LikeIcon = styled(BiLike)`
  color: Black;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #0056b3;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;



const LikedIcon = styled(BiSolidLike)`
color: #007bff;
  font-size: 1.2rem;

  &:hover {
    color: green;
  }
`;



export { LikeIcon, LikedIcon };
