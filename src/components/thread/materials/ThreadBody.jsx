import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import styled from 'styled-components';

const BodyContainer = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  ${({ longThread }) =>
    longThread
      ? `
    white-space: normal;
    display: block;
  `
      : `
    -webkit-line-clamp: 3; 
    max-height: 4.5em;
    white-space: normal;
  `}

  @media (max-width: 480px) {
    ${({ longThread }) =>
    !longThread &&
      `
      -webkit-line-clamp: 4;
      max-height: 6em;
  `}
  }
`;

const ThreadBody = ({ body, longThread }) => {
  return <BodyContainer longThread={longThread}>{body && parse(body)}</BodyContainer>;
};

ThreadBody.propTypes = {
  body: PropTypes.string,
  longThread: PropTypes.bool,
};

ThreadBody.defaultProps = {
  body: '',
  longThread: false,
};

export default ThreadBody;
