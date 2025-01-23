import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderBoards/action';

const LeaderBoards = () => {
  const dispatch = useDispatch();
  const { leaderBoards } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  return (
    <div>
      {/* Navbar Section */}
      <div className="leaderboards-navbar">
        <h3>Active Standings</h3>
      </div>

      {/* Leaderboard Header */}
      <div className="leaderboards-header">
        <div>
          <h3>User</h3>
        </div>
        <div>
          <h3>Score</h3>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="leaderboards-list">
        {leaderBoards?.map((user) => (
          <div key={user?.user?.id} className="leaderboards-item">
            {/* Avatar */}
            <div className="leaderboards-avatar">
              <img
                src={user?.user?.avatar}
                alt="img-person"
                className="leaderboards-avatar-img"
              />
            </div>

            {/* User Name */}
            <div className="leaderboards-user-name">
              <h3>{user?.user?.name}</h3>
            </div>

            {/* User Score */}
            <div className="leaderboards-score">
              <h3>{user?.score}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoards;
