/**
 * test scenario for authUser
 *
 *  - authUser function
 *  - should return the initial state when given by unkown action
 *  - should return the auth user when given SET_AUTH_USER action
 *  - should return null when given UNSET_AUTH_USER action
 */

import { describe, expect, it } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('authUserReducer function', () => {
  it('should return inial state when given by unknown', () => {
    //  Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return auth user when given by SET_AUTH_USER', () => {
    // Arrange
    const initialState = [];
    const action ={
      type: ActionType.SET_AUTH_USER,
      payload:{
        users: [
          {
            'id': 'john_doe',
            'name': 'John Doe',
            'email': 'john@example.com',
            'avatar': 'https://generated-image-url.jpg'
          }
        ]
      }
    };
    // action
    const nextState = authUserReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.authUser);

  });

  it('should return null when given by UNSET_AUTH_USER action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.UNSET_AUTH_USER,
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });
  // end

});