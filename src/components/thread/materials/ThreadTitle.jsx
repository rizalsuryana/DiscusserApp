import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Title, LinkTitile } from '../../styled/Title';

const ThreadTitle = ({ id, title, category, isDetails }) => {

  return (
    <div className="thread-title">
      {
        isDetails ? (
          <div>
            <Title>
              {title}
            </Title>
            <span className="span-thread-category">
                    #{`${category}`}
            </span>
          </div>
        ) : (
          <div>
            <LinkTitile to={`/thread/${id}`}>
              <Title>
                {title}
              </Title>
            </LinkTitile>
            <br/>
            <span className="span-thread-category">
                #{`${category}`}
            </span>
          </div>
        )
      }
    </div>
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