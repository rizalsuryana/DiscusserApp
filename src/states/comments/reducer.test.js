/**
 * test scenario for commentsReducer
 *
 * commentReducer function
 * should return the initial state when given by unkown action
 * should return the comment when given by RECEIVE_COMMENT
 * shoul return the comments with the new comment when given by ADD_COMMENT
 * should return the comment with liked when given by UP_VOTE_COMMENT
 * should return the comment with dislike when given by DOWN_VOTE_COMMENT
 * should neutralize like/dislike when given by NEUTRALIZE_VOTE_COMMENT
 */

import { describe, expect, it } from 'vitest';
import { commentReducer } from './reducer';
import { ActionType } from './action';

describe('commentReducer function', () => {

  it('should return initial state when given by UNKNOWN action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = commentReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);

  });

  it('should return the comment when given by RECEIVE_COMMENT action', () => {
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_COMMENT,
      payload:{
        comments: [
          {
            'id': 'comment-1',
            'content': 'Ini adalah komentar pertama',
            'createdAt': '2021-06-21T07:00:00.000Z',
            'owner': {
              'id': 'users-1',
              'name': 'John Doe',
              'avatar': 'https://generated-image-url.jpg'
            },
            'upVotesBy': [],
            'downVotesBy': []
          },
          {
            'id': 'comment-2',
            'content': 'Ini adalah komentar kedua',
            'createdAt': '2021-07-21T07:00:00.000Z',
            'owner': {
              'id': 'users-2',
              'name': 'John Kanan',
              'avatar': 'https://generated-image-url.jpg'
            },
            'upVotesBy': [],
            'downVotesBy': []
          }
        ]
      }
    };

    // Action
    const nextState = commentReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.comments);
  });


  it('shoul return the comments with the new comment when given by ADD_COMMENT', () => {
    //    Arrange
    const initialState = [
      {
        'id': 'comment-1',
        'content': 'Ini adalah komentar pertama',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'owner': {
          'id': 'users-1',
          'name': 'John Doe',
          'avatar': 'https://generated-image-url.jpg'
        },
        'upVotesBy': [],
        'downVotesBy': []
      }
    ];
    const action ={
      type: ActionType.ADD_COMMENT,
      payload: {
        comment: {
          'id': 'comment-2',
          'content': 'Ini adalah komentar kedua',
          'createdAt': '2021-07-21T07:00:00.000Z',
          'owner': {
            'id': 'users-2',
            'name': 'John Kanan',
            'avatar': 'https://generated-image-url.jpg'
          },
          'upVotesBy': [],
          'downVotesBy': []
        }
      }
    };
    // action
    const nextState = commentReducer(initialState, action);

    expect(nextState).toHaveLength(2);
    expect(nextState[0]).toEqual(action.payload.comment);

  });

  it('should clear comment when given CLEAR_COMMENT action', () => {
    const initialState =[
      {
        'id': 'comment-1',
        'content': 'Ini adalah komentar pertama',
        'createdAt': '2021-06-21T07:00:00.000Z',
        'owner': {
          'id': 'users-1',
          'name': 'John Doe',
          'avatar': 'https://generated-image-url.jpg'
        },
        'upVotesBy': [],
        'downVotesBy': []
      }
    ];
    const action = {
      type: ActionType.CLEAR_COMMENT
    };

    const nextState = commentReducer(initialState, action);

    expect(nextState).toBeNull;
  });

  it('should return the comment with liked when given by UP_VOTE_COMMENT action', () => {
    const initialState = [
      { id: 'comment-1', content: 'First comment', upVotesBy: [], downVotesBy: [] },
    ];
    const action = {
      type: ActionType.UP_VOTE_COMMENT,
      payload: { commentId: 'comment-1', userId: 'user-1' },
    };

    let nextState = commentReducer(initialState, action);
    expect(nextState[0].upVotesBy).toContain('user-1');

    nextState = commentReducer(nextState, action); // Toggle off
    expect(nextState[0].upVotesBy).not.toContain('user-1');
  });


  it('should dislike comment when given by DOWN_VOTE_COMMENT action', () => {
    const initialState = [
      { id: 'comment-1', content: 'First comment', upVotesBy: [], downVotesBy: [] },
    ];
    const action = {
      type: ActionType.DOWN_VOTE_COMMENT,
      payload: { commentId: 'comment-1', userId: 'user-1' },
    };

    let nextState = commentReducer(initialState, action);
    expect(nextState[0].downVotesBy).toContain('user-1');

    nextState = commentReducer(nextState, action); // Toggle off
    expect(nextState[0].downVotesBy).not.toContain('user-1');
  });

  it('should neutralize vote when given NEUTRALIZE_VOTE_COMMENT action', () => {
    const initialState = [
      {
        id: 'comment-1',
        content: 'First comment',
        upVotesBy: ['user-1'],
        downVotesBy: [],
      },
    ];
    const action = {
      type: ActionType.NEUTRALIZE_VOTE_COMMENT,
      payload: { commentId: 'comment-1', userId: 'user-1' },
    };

    const nextState = commentReducer(initialState, action);

    expect(nextState[0].upVotesBy).not.toContain('user-1');
    expect(nextState[0].downVotesBy).not.toContain('user-1');
  });

  // end

});
