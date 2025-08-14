/**
 * Test Thunks authUser
 *
 * - asyncSetAuthUser thunk
 *   - should dispatch action correctly when login is successful
 *   - should call toast.error when login fails
 * - asyncUnsetAuthUser thunk
 *   - should dispatch action correctly when logging out
 */

import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { asyncSetAuthUser, asyncUnsetAuthUser, setAuthUserActionCreator, unsetAuthUserActionCreator } from './action';
import api from '../../utils/api';
import toast from 'react-hot-toast';

// --- Mock react-hot-toast ---
vi.mock('react-hot-toast', () => {
  return {
    default: {
      success: vi.fn(),
      error: vi.fn(),
    },
  };
});

// --- Fake data ---
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
    // backup API
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    // restore API
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;
    delete api._login;
    delete api._getOwnProfile;

    // reset mocks
    toast.success.mockReset();
    toast.error.mockReset();
  });

  it('should dispatch actions correctly when login is successful', async () => {
    api.login = () => Promise.resolve(fakeToken);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUser);

    const dispatch = vi.fn();

    await asyncSetAuthUser({ email: 'john@example.com', password: 'password' })(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(toast.success).toHaveBeenCalledWith('Login Berhasil');
  });

  it('should call toast.error when login fails', async () => {
    api.login = () => Promise.reject(fakeErrorResponse);

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
