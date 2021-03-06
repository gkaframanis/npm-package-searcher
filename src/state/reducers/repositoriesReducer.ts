import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
	loading: boolean;
	error: string | null;
	data: string[];
}

const initialState = {
	loading: false,
	error: null,
	data: [],
};

// Reducer gets a state and returns a state.
const reducer = (
	state: RepositoriesState = initialState,
	action: Action
): RepositoriesState => {
	switch (action.type) {
		// The action when the user clicks on the button
		case ActionType.SEARCH_REPOSITORIES:
			return { loading: true, error: null, data: [] };
		// When the API returns the data we requested.
		// 100% certain that 'action' is SearchRepositoriesSuccessAction
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return { loading: false, error: null, data: action.payload };
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { loading: false, error: action.payload, data: [] };
		default:
			return state;
	}
};

export default reducer;
