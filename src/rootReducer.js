import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

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
  form: reduxFormReducer,
});

export default rootReducer;