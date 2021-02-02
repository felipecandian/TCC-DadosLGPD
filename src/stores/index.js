import { createStore } from 'redux';

const INITIAL_STATE = {
    pageQuiz: 0,
};

function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'TOGGLE_PAGE': {
            return { pageQuiz: action.pageQuiz }
        }
        default: {
            return state;
        }
    }
}

const store = createStore(reducers);

export default store;