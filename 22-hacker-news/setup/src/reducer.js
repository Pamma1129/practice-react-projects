import {
	SET_LOADING,
	SET_STORIES,
	REMOVE_STORY,
	HANDLE_PAGE,
	HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, isLoading: true };
		case SET_STORIES:
			const { hits, nbPages } = action.payload;
			return { ...state, hits, nbPages, isLoading: false };
		case REMOVE_STORY:
			const newHits = state.hits.filter(story => {
				return story.objectID !== action.payload;
			});
			return { ...state, hits: newHits, isLoading: false };
		case HANDLE_SEARCH:
			return { ...state, query: action.payload, page: 0, isLoading: false };
		case HANDLE_PAGE:
			let page;
			if (action.payload === 'INC') {
				page = state.page < state.nbPages - 1 ? state.page + 1 : 0;
			} else {
				page = state.page > 0 ? state.page - 1 : state.nbPages - 1;
			}
			return { ...state, page, isLoading: false };
		default:
			return state;
	}
};
export default reducer;
