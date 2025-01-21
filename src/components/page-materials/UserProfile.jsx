import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ authUser }) => {
  const { name, email, avatar } = authUser;
  return (
    <div className="">
      <div className="user-profile">
        <div className="user-profile__avatar">
          <img
            src= {avatar}
            alt= 'user-avatar'
          />
        </div>
      </div>
      <div className="user-profile__name-email">
        <h3 className="user-profile__nameh3">
          {name}
        </h3>
        <span>
          {email}
        </span>
      </div>
    </div>
  );
};

const authUserShape ={
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

UserProfile.propTypes = {
  authUserShape: PropTypes.shape(authUserShape).isRequired
};

export default UserProfile;