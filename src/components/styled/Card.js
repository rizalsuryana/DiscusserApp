import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
   width: 80%;
  margin: 0 auto; /* Pastikan kontennya berada di tengah */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export default Card;