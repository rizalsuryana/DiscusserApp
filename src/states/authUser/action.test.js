/**
 * Skenario test
 *
 * - asyncSetAuthUser thunk
 *   - should dispatch action correctly when login is successful
 *   - should call alert when login fails
 * - asyncUnsetAuthUser thunk
 *   - should dispatch action correctly when logging out
 */

import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { asyncSetAuthUser, asyncUnsetAuthUser } from './action';
import { setAuthUserActionCreator, unsetAuthUserActionCreator } from './action';
import api from '../../utils/api';
import toast from 'react-hot-toast';
import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest';

const fakeAuthUser = {
  id: 'user-1',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg',
};

const fakeToken = 'fake-access-token';
const fakeErrorResponse = new Error('Ups..., Something went wrong');

describe('asyncSetAuthUser Thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
    toast._success = toast.success;
    toast._error = toast.error;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;
    toast.success = toast._success;
    toast.error = toast._error;
    delete api._login;
    delete api._getOwnProfile;
    delete toast._success;
    delete toast._error;
  });

  it('should dispatch actions correctly when login is successful', async () => {
    api.login = () => Promise.resolve(fakeToken);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUser);
    toast.success = vi.fn();

    const dispatch = vi.fn();

    await asyncSetAuthUser({ email: 'john@example.com', password: 'password' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.success).toHaveBeenCalledWith('Login Berhasil');
  });

  it('should call toast.error when login fails', async () => {
    api.login = () => Promise.reject(fakeErrorResponse);
    toast.error = vi.fn();

    const dispatch = vi.fn();

    await asyncSetAuthUser({ email: 'john@example.com', password: 'wrong-password' })(dispatch);

    expect(toast.error).toHaveBeenCalledWith(`Silahkan coba kembali ${fakeErrorResponse.message}`);
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

describe('asyncUnsetAuthUser Thunk', () => {
  it('should dispatch actions correctly when logging out', () => {
    const dispatch = vi.fn();

    asyncUnsetAuthUser()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});


