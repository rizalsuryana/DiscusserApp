import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: ${(props) => props.gap};
  max-width: 80%;
  
  margin: 0 auto; /* Pastikan kontennya berada di tengah */

  /* Menambahkan responsivitas */
  @media (max-width: 768px) {
    max-width: 100%; /* Atur menjadi 100% di mobile */
  }
`;

Grid.defaultProps = {
  gap: '1rem',
};

export default Grid;
