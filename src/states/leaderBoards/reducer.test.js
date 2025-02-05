/**
 * test scenario for leaderboard
 *
 *  - leaderboard function
 *  - should return the initial state when given by unkown action
 *  - should return leaderboard when given RECEIVE_LEADERBOARDS action
 *  - should clear leaderboard when given CLEAR_LEADERBOARD
 */


import { describe, expect, it } from 'vitest';
import leaderBoardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardsReducer function', () => {

  it('should return the initial state when given by unknown action', () => {
    const initialState = [];
    const action = {
      type: 'UNKNOWN'
    };

    // action
    const nextState = leaderBoardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });


  it('should return leaderboard when given by RECEIVE_LEADERBOARDS action', () => {
    // Action
    const initialState =[];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            'user': {
              'id': 'users-1',
              'name': 'John Doe',
              'email': 'john@example.com',
              'avatar': 'https://generated-image-url.jpg'
            },
            'score': 10
          },
          {
            'user': {
              'id': 'users-2',
              'name': 'Jane Doe',
              'email': 'jane@example.com',
              'avatar': 'https://generated-image-url.jpg'
            },
            'score': 5
          }
        ]
      }
    };
    // action
    const nextState = leaderBoardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderBoards);
  });

  it('should clear leaderboard when given CLEAR_LEADERBOARDS action', () => {
    const initialState = [
      {
        'user': {
          'id': 'users-1',
          'name': 'John Doe',
          'email': 'john@example.com',
          'avatar': 'https://generated-image-url.jpg'
        },
        'score': 10
      }
    ];

    const action = {
      type: ActionType.CLEAR_LEADERBOARDS
    };

    const nextState = leaderBoardsReducer(initialState, action);

    // Assert that the state is reset to an empty array
    expect(nextState).toEqual([]);
  });















//   END
});
