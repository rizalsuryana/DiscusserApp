/**
 * skenario test
*
* - asyncPopulateUsersAndThreads thunk
*  - should dispatch action correctly when data fetching success
*  - should dispatch action and call alert correctly when data fetching failed
*/

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import api from '../../utils/api';
import { asyncPopulateUserAndThreads } from './action';
import { receiveUsersActionCreator } from '../users/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveThreadsActionCreator } from '../threads/action';
import toast from 'react-hot-toast';

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2021-06-21T07:00:00.000Z',
    ownerId: 'users-1',
    upVotesBy: [],
    downVotesBy: [],
    totalComments: 0,
  },
];

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
];

const fakeErrorResponse = new Error('Ups..., Something went wrong');

describe('asyncPopulateUserAndThreads Thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
    toast._error = toast.error;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;
    delete api._getAllUsers;
    delete api._getAllThreads;

    toast.error = toast._error;
    delete toast._error;
  });

  it('should dispatch actions correctly when data fetching is successful', async () => {
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);

    const dispatch = vi.fn();

    await asyncPopulateUserAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should call toast.error and dispatch hideLoading when data fetching fails', async () => {
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);

    toast.error = vi.fn();
    const dispatch = vi.fn();

    await asyncPopulateUserAndThreads()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.error).toHaveBeenCalledWith(`Silahkan coba kembali ${fakeErrorResponse.message}`);
  });
});
