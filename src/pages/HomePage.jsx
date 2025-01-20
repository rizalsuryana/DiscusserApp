import React, { useEffect } from 'react';
import ThreadList from '../components/ThreadsList';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUserAndThreads } from '../states/shared/action';
import { asyncAddThread, asyncUpVoteThread, asyncDownVoteThread, asyncNeutralizeVoteThread } from '../states/threads/action';

const HomePage = () => {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states)=> states);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(asyncPopulateUserAndThreads);
  }, [dispatch]);

  const onLike = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDislike = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onNeutralizeVote = (id) => {
    dispatch(asyncNeutralizeVoteThread(id));
  };

  //   filtered add dont forget

  const threadList = threads.map((thread)=>({
    ...thread,
    user: users.find((user)=> user.id === thread.user),
    authUser: authUser.id,
  }));

  return (
    <section className='home-page'>
      <ThreadList threads={threadList} like={onLike}
        dislike={onDislike} neutralLike={onNeutralizeVote}
        neutralDislike={onNeutralizeVote}/>
    </section>
  );
};

export default HomePage;