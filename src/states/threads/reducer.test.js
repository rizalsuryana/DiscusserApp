/**
* test scenario for threadsReducer
*
* - threadsReducer function
*  - should return the initial state when given by unknown action
*  - should return the threads when given by RECEIVE_THREAD action
*  - should return the threads with the new thread when given by ADD_THREAD action
*  - should return the threads liked when given by UP_VOTE_THREAD
*  - should return the threads dislike when given by DOWN_VOTE_THREAD
*  - should return the neutralize like / dislike when given by NEUTRALIZE_THREAD
*
*/

import { describe, expect, it } from 'vitest';
import threadsReducer from './reducer';
import { ActionType } from './action';

describe('threadReducer function', ()=> {
  it('should return the initial state when given by unknow action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });


  it('should return threads when given by RECEIVE_THREADS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            'id': 'thread-1',
            'title': 'Thread Pertama',
            'body': 'Ini adalah thread pertama',
            'category': 'General',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'ownerId': 'users-1',
            'upVotesBy': [],
            'downVotesBy': [],
            'totalComments': 0
          },
          {
            'id': 'thread-2',
            'title': 'Thread Kedua',
            'body': 'Ini adalah thread kedua',
            'category': 'General',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'ownerId': 'users-2',
            'upVotesBy': [],
            'downVotesBy': [],
            'totalComments': 0
          }
        ]
      }
    };
    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads woth the new thread when given by ADD_THREAD action', () => {
    // Arrange

    const initialState =[
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': [],
        'downVotesBy': [],
        'totalComments': 0
      },
    ];
    const action ={
      type: ActionType.ADD_THREAD,
      payload: {
        thread: {
          'id': 'thread-2',
          'title': 'Thread Kedua',
          'body': 'Ini adalah thread kedua',
          'category': 'General',
          'createdAt': '2021-06-21T07:00:00.000Z',
          'ownerId': 'users-2',
          'upVotesBy': [],
          'downVotesBy': [],
          'totalComments': 0
        }
      }
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the liked talk when given by UP_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': [],
        'downVotesBy': [],
        'totalComments': 0
      }
    ];
    const action = {
      type : ActionType.UP_VOTE_THREAD,
      payload: {
        'userId': 'users-1',
        'threadId': 'thread-1',
      }
    };

    // Action upVote
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: []
      }
    ]);
  });


  it('should return the threads with the dislike talk when given by DOWN_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': [],
        'downVotesBy': [],
        'totalComments': 0
      }
    ];
    const action = {
      type : ActionType.DOWN_VOTE_THREAD,
      payload: {
        'userId': 'users-1',
        'threadId': 'thread-1',
      }
    };

    // Action downVote
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
        upVotesBy: []
      }
    ]);
  });


  it('should neutralize like / dislike When given by NEUTRALIZE_THREAD action ', () => {
    // arrange
    const initialState = [
      {
        'id': 'thread-1',
        'title': 'Thread Pertama',
        'body': 'Ini adalah thread pertama',
        'category': 'General',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'ownerId': 'users-1',
        'upVotesBy': [],
        'downVotesBy': [],
        'totalComments': 0
      }
    ];

    const action = {
      type: ActionType.NEUTRALIZE_THREAD,
      payload:{
        'userId': 'users-1',
        'threadId': 'thread-1',
      }
    };

    // Action neutralize
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy : [],
        downVotesBy : []
      }
    ]);

  });



});