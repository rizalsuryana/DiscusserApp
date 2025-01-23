import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const ThreadBody = ({ body, longThread }) => {

  return (
    <div>
      <p className={`thread-body ${longThread? '' : 'thread-limit'}`}>
        {body && parse(body)}
      </p>
    </div>
  );
};

ThreadBody.propTypes = {
  body: PropTypes.string,
  longThread: PropTypes.bool
};

ThreadBody.defaultProps = {
  body: '',
  longThread: false,
};


export default ThreadBody;