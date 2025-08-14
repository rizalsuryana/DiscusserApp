import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderBoards/action';
import * as UI from './LeaderBoardStyles';

const LeaderBoardsPage = () => {
  const dispatch = useDispatch();
  const { leaderBoards } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  return (
    <UI.LeaderboardContainer>
      {/* Desktop Header */}
      <UI.LeaderboardHeader>
        <span>User</span>
        <span>Score</span>
      </UI.LeaderboardHeader>

      {/* Desktop Rows */}
      {leaderBoards?.map((user, index) => (
        <UI.LeaderboardRow key={user.user.id} index={index}>
          <UI.Avatar src={user.user.avatar} alt={user.user.name} />
          <UI.UserName>{user.user.name}</UI.UserName>
          <UI.Score>{user.score}</UI.Score>
        </UI.LeaderboardRow>
      ))}

      {/* Mobile List */}
      <UI.MobileList>
        {leaderBoards?.map((user, index) => (
          <UI.LeaderboardRow key={user.user.id} index={index}>
            <UI.Avatar src={user.user.avatar} alt={user.user.name} />
            <UI.UserName>{user.user.name}</UI.UserName>
            <UI.Score>{user.score}</UI.Score>
          </UI.LeaderboardRow>
        ))}
      </UI.MobileList>
    </UI.LeaderboardContainer>
  );
};

export default LeaderBoardsPage;
