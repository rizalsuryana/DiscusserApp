import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import * as UI from '../ThreadStyle';

const ThreadBody = ({ body, longThread }) => {
  return <UI.ThreadBodyContainer longThread={longThread}>{body && parse(body)}</UI.ThreadBodyContainer>;
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
