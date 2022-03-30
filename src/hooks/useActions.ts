import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

export const useActions = () => {
	const dispatch = useDispatch();

	// { searchRepositories: dispatch(searchRepositories)} // What we get back kinda looks like
	return bindActionCreators(actionCreators, dispatch);
};
