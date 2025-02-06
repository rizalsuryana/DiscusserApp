import styled from 'styled-components';

const Grid = styled.div`
// background-color:red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: ${(props) => props.gap};
  max-width: 70%;
  
  margin: auto; 

  
  @media (max-width: 768px) {
    max-width: 100%; 
  }
`;

Grid.defaultProps = {
  gap: '1rem',
};

export default Grid;
