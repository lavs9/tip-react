import * as ActionType from 'actions';

function errorReducer (state = [], action) {
    switch(action.type) {
        case ActionType.ERROR:
            return action.error.message + '$' + Date.now();
            break;

        default:
            return state;
    }
}

export default errorReducer;
