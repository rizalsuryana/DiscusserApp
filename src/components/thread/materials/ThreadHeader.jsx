import React from 'react';
import PropTypes from 'prop-types';

const ThreadHeader = ({ avatar, name, isDetails }) => {

  return (
    <div className="thread-header">
      {
        isDetails ? (
          <div className="thread-header__avatar">
            <img src={avatar} alt={avatar} className='avatar-thread-header'/>
          </div>
        ) : (
          <div className="thread-header-detail__avatar">
            <img src={avatar} alt={avatar} className="avatar-header-thread-detail" />
          </div>
        )
      }
      <div className="theread-header-name">
        <span>
          {name}
        </span>
      </div>
    </div>
  );
};

ThreadHeader.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isDetails: PropTypes.bool.isRequired,
};

ThreadHeader.defaultProps = {
  avatar: '',
  name: '',
};


export default ThreadHeader;