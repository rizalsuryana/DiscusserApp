/**
 * Skenario test
 *
 * - asyncAddThread thunk
 *   - should dispatch action correctly when API call is successful
 *   - should handle error correctly when API call fails
 *
 * - asyncUpVoteThread thunk
 *   - should dispatch action correctly when upvoting a thread
 *   - should handle error correctly when upvoting fails
 *
 * - asyncDownVoteThread thunk
 *   - should dispatch action correctly when downvoting a thread
 *   - should handle error correctly when downvoting fails
 *
 * - asyncNeutralizeVoteThread thunk
 *   - should dispatch action correctly when neutralizing vote
 *   - should handle error correctly when neutralizing vote fails
 */

import { describe, it, expect, vi, } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import {
  asyncAddThread,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralizeVoteThread,
  addThreadActionCreator,
  upVoteThreadActionCreator,
  downVoteThreadActionCreator,
  neutralizeThreadActionCreator,
} from './action';

// Mock API and window.alert
vi.mock('../../utils/api');
vi.spyOn(window, 'alert').mockImplementation(() => {});

const fakeThread = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0
};

const fakeThreads = [fakeThread];

describe('asyncAddThread thunk', () => {
  it('should dispatch action correctly when API call is successful', async () => {
    // Arrange
    api.createThread.mockResolvedValue(fakeThread);

    const dispatch = vi.fn();

    // Act
    await asyncAddThread({
      title: fakeThread.title,
      body: fakeThread.body,
      category: fakeThread.category
    })(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThread));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle error correctly when API call fails', async () => {
    // Arrange
    api.createThread.mockRejectedValue(new Error('Failed to create thread... hahaha'));

    const dispatch = vi.fn();

    // Act
    await asyncAddThread({
      title: fakeThread.title,
      body: fakeThread.body,
      category: fakeThread.category
    })(dispatch);

    // Assert
    expect(window.alert).toHaveBeenCalledWith('Failed to create thread... hahaha');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncUpVoteThread thunk', () => {
  it('should dispatch action correctly when upvoting a thread', async () => {
    // Arrange
    const threadId = fakeThread.id;
    const userId = 'users-1';
    const getState = () => ({
      authUser: {
        id: userId
      },
      threads: fakeThreads
    });

    api.upVoteThread.mockResolvedValue();

    const dispatch = vi.fn();

    // Act
    await asyncUpVoteThread(threadId)(dispatch, getState);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadActionCreator({ threadId, userId }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle error correctly when upvoting fails', async () => {
    // Arrange
    const threadId = fakeThread.id;
    const getState = () => ({
      authUser: {
        id: 'users-1' },
      threads: fakeThreads
    });

    api.upVoteThread.mockRejectedValue(new Error('Failed to like ...'));

    const dispatch = vi.fn();

    // Act
    await asyncUpVoteThread(threadId)(dispatch, getState);

    // Assert
    expect(window.alert).toHaveBeenCalledWith('Failed to like ...');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncDownVoteThread thunk', () => {
  it('should dispatch action correctly when downvoting a thread', async () => {
    // Arrange
    const threadId = fakeThread.id;
    const userId = 'users-1';
    const getState = () => ({
      authUser: {
        id: userId },
      threads: fakeThreads
    });

    api.downVoteThread.mockResolvedValue();

    const dispatch = vi.fn();

    // Act
    await asyncDownVoteThread(threadId)(dispatch, getState);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(downVoteThreadActionCreator({ threadId, userId }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle error correctly when downvoting fails', async () => {
    // Arrange
    const threadId = fakeThread.id;
    const getState = () => ({
      authUser: {
        id: 'users-1'
      },
      threads: fakeThreads
    });

    api.downVoteThread.mockRejectedValue(new Error('failed to dislike... awokwokwok'));

    const dispatch = vi.fn();

    // Act
    await asyncDownVoteThread(threadId)(dispatch, getState);

    // Assert
    expect(window.alert).toHaveBeenCalledWith('failed to dislike... awokwokwok');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncNeutralizeVoteThread thunk', () => {
  it('should dispatch action correctly when neutralizing vote', async () => {
    // Arrange
    const threadId = fakeThread.id;
    const userId = 'users-1';
    const getState = () => ({
      authUser: {
        id: userId
      },
      threads: fakeThreads
    });

    api.neutralizeThreadVote.mockResolvedValue();

    const dispatch = vi.fn();

    // Act
    await asyncNeutralizeVoteThread(threadId)(dispatch, getState);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(neutralizeThreadActionCreator({ threadId, userId }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should handle error correctly when neutralizing vote fails', async () => {
    // Arrange
    const threadId = fakeThread.id;
    const getState = () => ({
      authUser: {
        id: 'users-1' },
      threads: fakeThreads
    });

    api.neutralizeThreadVote.mockRejectedValue(new Error('Failed to neutralize vote'));

    const dispatch = vi.fn();

    // Act
    await asyncNeutralizeVoteThread(threadId)(dispatch, getState);

    // Assert
    expect(window.alert).toHaveBeenCalledWith('Failed to neutralize vote');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
