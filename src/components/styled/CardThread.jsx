import styled from 'styled-components';

const CardThread = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
   width: 70%;
  margin: auto; /* Pastikan kontennya berada di tengah */


  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

   @media (max-width: 768px) {
    width: 100%; 
  }
`;

export default CardThread;