import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ThreadTitle = ({ id, title, category, isDetails }) => {

  return (
    <div className="thread-title">
      {
        isDetails ? (
          <div>
            <p>
              <span className="span-thread-title">
                {title}
              </span>
            </p>
            <span className="span-thread-category">
                    #{`${category}`}
            </span>
          </div>
        ) : (
          <div>
            <Link to={`/thread/${id}`}>
              <span className="span-thread-title">
                {title}
              </span>
            </Link>
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