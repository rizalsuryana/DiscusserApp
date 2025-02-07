import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 1.5rem;
  color: Black;

    &:hover {
    color: #007bff;
  }
`;

const LinkTitile = styled(Link)`
  text-decoration: none;

`;

export { Title, LinkTitile };