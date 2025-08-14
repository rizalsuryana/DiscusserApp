import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../../../utils';
import * as UI from '../ThreadStyle';

const ThreadHeader = ({ avatar, name, createdAt }) => {
  return (
    <UI.ThreadHeaderContainer>
      <UI.Avatar src={avatar} />
      <UI.HeaderInfo>
        <span>{name}</span>
        <span>{postedAt(createdAt)}</span>
      </UI.HeaderInfo>
    </UI.ThreadHeaderContainer>
  );
};

ThreadHeader.defaultProps = {
  createdAt: '',
  avatar: '',
  name: '',
};

ThreadHeader.propTypes = {
  createdAt: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isDetails: PropTypes.bool.isRequired,
};

export default ThreadHeader;
