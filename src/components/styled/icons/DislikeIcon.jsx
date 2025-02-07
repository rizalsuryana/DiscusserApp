import styled from 'styled-components';
import { BiDislike, BiSolidDislike } from 'react-icons/bi';

const Dislike = styled(BiDislike)`
  color: Black;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: red;
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1);
  }
`;

const Disliked = styled(BiSolidDislike)`
color: red;
  font-size: 1.2rem;

  &:hover {
    color: red;
  }
`;

export { Dislike, Disliked };
