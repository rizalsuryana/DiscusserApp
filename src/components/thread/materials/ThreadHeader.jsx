import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../styled/Avatar';
import { Flex } from '../../styled/Flex';
import styled from 'styled-components';
import { postedAt } from '../../../utils';

const OwnerName = styled.div`
margin-top: 0.5rem;
width: 100%;
height: 100%;
font-size : 1rem;
`;

const PostedDate = styled.p`
color : grey;
font-size: 0.8rem;
`;


const ThreadHeader = ({ avatar, name, isDetails, createdAt, }) => {
  console.log('Created At:', createdAt);
  console.log('Formatted Time:', postedAt(createdAt));

  return (
    <Flex>
      {
        isDetails ? (
          <div className="thread-header__avatar">
            <Avatar src={avatar} alt={avatar} className='avatar-thread-header'/>
          </div>
        ) : (
          <div className="thread-header-detail__avatar">
            <Avatar src={avatar} alt={avatar} className="avatar-header-thread-detail" />
          </div>
        )
      }
      <div className="theread-header-name">
        <OwnerName>
          {name}
        </OwnerName>
      </div>
      <div className="thread-footer__postedAt">
        <PostedDate>
          {postedAt(createdAt)}
        </PostedDate>
      </div>
    </Flex>
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