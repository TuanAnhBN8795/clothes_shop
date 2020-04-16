import { combineReducers } from 'redux';

const testReducer = (state, action) => ({
  test: 'test-data',
  book: 'book-data',
  user: 'user-data'
});

const rootReducer = combineReducers({
  testReducer
});

export default rootReducer;