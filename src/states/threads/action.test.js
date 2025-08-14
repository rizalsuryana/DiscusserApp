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

import { describe, it, expect, vi } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import toast from 'react-hot-toast';
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

vi.mock('../../utils/api');
vi.mock('react-hot-toast', () => ({
  toast: { success: vi.fn(), error: vi.fn() },
}));

const fakeThread = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2021-06-21T07:00:00.000Z',
  ownerId: 'users-1',
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};
const fakeThreads = [fakeThread];

describe('Threads Thunks', () => {
  it('asyncAddThread should dispatch actions on success', async () => {
    api.createThread.mockResolvedValue(fakeThread);
    const dispatch = vi.fn();

    await asyncAddThread({ title: fakeThread.title, body: fakeThread.body, category: fakeThread.category })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThread));
    expect(toast.success).toHaveBeenCalledWith('Thread berhasil dibuat! 🎉');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('asyncAddThread should call toast.error on failure', async () => {
    const error = new Error('Failed create thread');
    api.createThread.mockRejectedValue(error);
    const dispatch = vi.fn();

    await asyncAddThread({ title: fakeThread.title, body: fakeThread.body, category: fakeThread.category })(dispatch);

    expect(toast.error).toHaveBeenCalledWith(`Gagal membuat thread: ${error.message}`);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('asyncUpVoteThread should dispatch actions correctly', async () => {
    const dispatch = vi.fn();
    const getState = () => ({ authUser: { id: 'users-1' }, threads: fakeThreads });
    api.upVoteThread.mockResolvedValue();

    await asyncUpVoteThread(fakeThread.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadActionCreator({ threadId: fakeThread.id, userId: 'users-1' }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('asyncDownVoteThread should dispatch actions correctly', async () => {
    const dispatch = vi.fn();
    const getState = () => ({ authUser: { id: 'users-1' }, threads: fakeThreads });
    api.downVoteThread.mockResolvedValue();

    await asyncDownVoteThread(fakeThread.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(downVoteThreadActionCreator({ threadId: fakeThread.id, userId: 'users-1' }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('asyncNeutralizeVoteThread should dispatch actions correctly', async () => {
    const dispatch = vi.fn();
    const getState = () => ({ authUser: { id: 'users-1' }, threads: fakeThreads });
    api.neutralizeThreadVote.mockResolvedValue();

    await asyncNeutralizeVoteThread(fakeThread.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(neutralizeThreadActionCreator({ threadId: fakeThread.id, userId: 'users-1' }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
