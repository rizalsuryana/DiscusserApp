import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import { commentReducer } from './comments/reducer';
import filteredReducer from './filters/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderBoardsReducer from './leaderBoards/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import { loadingBarMiddleware } from 'react-redux-loading-bar';




const store = configureStore({
  reducer: {
    loadingBar: loadingBarReducer,
    authUser : authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    isPreload: isPreloadReducer,
    leaderBoards: leaderBoardsReducer,
    filtered: filteredReducer,
    detailThread: threadDetailReducer,
    comments: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,  // Nonaktifkan pemeriksaan status yang tidak dapat diubah
    }).concat(loadingBarMiddleware()),
});

export default store;