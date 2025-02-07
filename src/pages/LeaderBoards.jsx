import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboard } from '../states/leaderBoards/action';
import Container from '../components/styled/Container';
import CardThread from '../components/styled/CardThread';
import {
  LeaderboardsWrapperLB,
  HeaderLB,
  ListLB,
  ItemLB,
  AvatarLB,
  UserNameLB,
  ScoreLB,
} from '../components/styled/LeaderboardStyle';

const LeaderBoards = () => {
  const dispatch = useDispatch();
  const { leaderBoards } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveLeaderboard());
  }, [dispatch]);

  return (
    <Container>
      <CardThread>
        <LeaderboardsWrapperLB>
          <HeaderLB>
            <h3>User</h3>
            <h3>Score</h3>
          </HeaderLB>

          <ListLB>
            {leaderBoards?.map((user) => (
              <ItemLB key={user?.user?.id}>
                <AvatarLB src={user?.user?.avatar} alt="img-person" />
                <UserNameLB>{user?.user?.name}</UserNameLB>
                <ScoreLB>{user?.score}</ScoreLB>
              </ItemLB>
            ))}
          </ListLB>
        </LeaderboardsWrapperLB>
      </CardThread>
    </Container>
  );
};

export default LeaderBoards;
