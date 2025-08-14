import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../styled/Avatar';

const UserProfile = ({ authUser }) => {
  const { name, email, avatar } = authUser;

  return (
    <div>
      <div>
        <div>
          <Avatar
            src={avatar}
            alt="user-avatar"
          />
        </div>
      </div>
      <div>
        <h3>{name}</h3>
        <span>{email}</span>
      </div>
    </div>
  );
};

const authUserShape = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

UserProfile.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired
};

export default UserProfile;
