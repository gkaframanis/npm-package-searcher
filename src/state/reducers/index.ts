import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
	repositories: repositoriesReducer,
});

export default reducers;

// RootState: the type of information we have in our store.
export type RootState = ReturnType<typeof reducers>;
