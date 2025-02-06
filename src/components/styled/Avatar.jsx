import styled from 'styled-components';

const Avatar = styled.img`
 width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: 768px) {
// display: none;
  }
`;

export default Avatar;