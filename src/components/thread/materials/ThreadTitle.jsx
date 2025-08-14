import React from 'react';
import PropTypes from 'prop-types';
import * as UI from '../ThreadStyle';

const ThreadTitle = ({ id, title, category, isDetails }) => {
  return (
<UI.ThreadTitleContainer>
      {isDetails ? (
        <>
          <h2>{title}</h2>
          <div>#{category}</div>
        </>
      ) : (
        <>
          <UI.StyledLink to={`/thread/${id}`}>
            <h2>{title}</h2>
          </UI.StyledLink>
          <div>#{category}</div>
        </>
      )}
    </UI.ThreadTitleContainer>
  );
};

ThreadTitle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  isDetails: PropTypes.bool.isRequired,
};

ThreadTitle.defaultProps = {
  id: '',
  title: '',
  category: '',
};

export default ThreadTitle;
