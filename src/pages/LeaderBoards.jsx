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
      <div>
        <div>
          <div>
            <h3>Active Standings</h3>
          </div>
        </div>
      </div>

      {/* Leaderboard Header */}
      <div>
        <div>
          <div>
            <h3>User</h3>
          </div>
          <div>
            <h3>Score</h3>
          </div>
        </div>

        {/* Leaderboard List */}
        <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
          {leaderBoards?.map((user) => (
            <div
              key={user?.user?.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                margin: '10px auto',
                borderBottom: '0.5px solid rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Avatar */}
              <div style={{ marginRight: '10px' }}>
                <img
                  src={user?.user?.avatar}
                  alt="img-person"
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* User Name */}
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0 }}>{user?.user?.name}</h3>
              </div>

              {/* User Score */}
              <div>
                <h3 style={{ margin: 0 }}>{user?.score}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default LeaderBoards;