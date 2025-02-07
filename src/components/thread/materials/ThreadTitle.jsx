import React from 'react';
import PropTypes from 'prop-types';
import { Title, LinkTitile } from '../../styled/Title';
import styled from 'styled-components';

const CategoryDiscussion = styled.div`
border-radius: 0.2rem;
width: fit-content;
background-color:rgba(0, 0, 0, 0.24) ;

`;


const ThreadTitle = ({ id, title, category, isDetails }) => {

  return (
    <div className="thread-title">
      {
        isDetails ? (
          <>
            <Title>
              {title}
            </Title>
            <CategoryDiscussion>
                    #{`${category}`}
            </CategoryDiscussion>
          </>
        ) : (
          <>
            <LinkTitile to={`/thread/${id}`}>
              <Title>
                {title}
              </Title>
            </LinkTitile>
            <CategoryDiscussion>
                #{`${category}`}
            </CategoryDiscussion>
          </>
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