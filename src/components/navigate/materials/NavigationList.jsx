import React from 'react';
import PropTypes from 'prop-types';
import { GiDiscussion, } from 'react-icons/gi';
import { FaRankingStar } from 'react-icons/fa6';
import { IoIosLogOut } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ROUTE_PATH from '../../../config/routePaths';

const NavigationData = ({ signOut }) => {
  return (
    <div className="navbar">
      <Link to={ROUTE_PATH.HOME_PAGE}>
        <div className="navbar-discussion">
          <div className="navbar-icon__discussion">
            <GiDiscussion/>
          </div>
          <div className="navbar-title__discussion">
          Discussion
          </div>
        </div>
      </Link>
      <Link to={ROUTE_PATH.LEADER_BOARDS_PAGE}>
        <div className="navbar-leaderboar">
          <div className="navbar-icon__leaderboard">
            <FaRankingStar/>
          </div>
          <div className="navbar-title__leaderboard">
          Leaderboard
          </div>
        </div>
      </Link>
      <div className="navbar-logout">
        <div className="navbar-icon__logout">
          <IoIosLogOut/>
        </div>
        <button
          className='button-logout'
          type='button'
          onClick={signOut}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

NavigationData.propTypes = {
  signOut: PropTypes.func.isRequired,
};


export default NavigationData;