import styled from 'styled-components';

const CardThread = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 70%;
  margin: auto;
  border: 0.1rem solid #007bff;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Efek neon awal */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.8), 0 0 25px rgba(0, 123, 255, 0.6); /* Glow lebih terang saat hover */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default CardThread;
