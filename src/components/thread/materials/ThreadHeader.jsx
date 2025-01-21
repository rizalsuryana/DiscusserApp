import React from 'react';
import PropTypes from 'prop-types';

const ThreadHeader = (attributes) => {
  const {
    avatar,
    name,
    isDetail
  } =  attributes;

  return (
    <div className="thread-header">
      {
        isDetail ? (
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
  isDetail: PropTypes.bool.isRequired,
};

ThreadHeader.defaultProps = {
  avatar: '',
  name: '',
};


export default ThreadHeader;