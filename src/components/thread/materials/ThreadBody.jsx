import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const ThreadBody = (attributes) => {
  const { body, longThread } = attributes;

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

ThreadBody.defaultPros = {
  body: '',
  longThread: false,
};


export default ThreadBody;