/**
 * Test Threads Thunks
 *
 * - asyncAddThread
 * - asyncUpVoteThread
 * - asyncDownVoteThread
 * - asyncNeutralizeVoteThread
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
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

// --- Mock API dan toast ---
vi.mock('../../utils/api');
vi.mock('react-hot-toast', () => ({
  default: { success: vi.fn(), error: vi.fn() },
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
  let dispatch;
  let getState;

  beforeEach(() => {
    dispatch = vi.fn();
    getState = () => ({ authUser: { id: 'users-1' }, threads: fakeThreads });
    toast.success.mockClear();
    toast.error.mockClear();
  });

  // --- asyncAddThread ---
  it('asyncAddThread should dispatch actions on success', async () => {
    api.createThread.mockResolvedValue(fakeThread);

    await asyncAddThread({ title: fakeThread.title, body: fakeThread.body, category: fakeThread.category })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(addThreadActionCreator(fakeThread));
    expect(toast.success).toHaveBeenCalledWith('Thread berhasil dibuat! 🎉');
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('asyncAddThread should call toast.error on failure', async () => {
    const error = new Error('Failed create thread');
    api.createThread.mockRejectedValue(error);

    await asyncAddThread({ title: fakeThread.title, body: fakeThread.body, category: fakeThread.category })(dispatch);

    expect(toast.error).toHaveBeenCalledWith(`Gagal membuat thread: ${error.message}`);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // --- asyncUpVoteThread ---
  it('asyncUpVoteThread should dispatch actions correctly', async () => {
    api.upVoteThread.mockResolvedValue();

    await asyncUpVoteThread(fakeThread.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(upVoteThreadActionCreator({ threadId: fakeThread.id, userId: 'users-1' }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // --- asyncDownVoteThread ---
  it('asyncDownVoteThread should dispatch actions correctly', async () => {
    api.downVoteThread.mockResolvedValue();

    await asyncDownVoteThread(fakeThread.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(downVoteThreadActionCreator({ threadId: fakeThread.id, userId: 'users-1' }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  // --- asyncNeutralizeVoteThread ---
  it('asyncNeutralizeVoteThread should dispatch actions correctly', async () => {
    api.neutralizeThreadVote.mockResolvedValue();

    await asyncNeutralizeVoteThread(fakeThread.id)(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(neutralizeThreadActionCreator({ threadId: fakeThread.id, userId: 'users-1' }));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
