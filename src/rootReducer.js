import { combineReducers } from 'redux';

import { postsBySubreddit, selectedSubreddit } from './redditApiReducer';

const testReducer = (state, action) => ({
  test: 'test-data',
  book: 'book-data',
  user: 'user-data'
});

const rootReducer = combineReducers({
  testReducer,
  postsBySubreddit,
  selectedSubreddit,
});

export default rootReducer;