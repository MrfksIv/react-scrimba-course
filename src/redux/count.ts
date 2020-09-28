import { Action, ActionNames } from './actions';
import { ThunkAction } from "redux-thunk";


export function incrementCount(): ThunkAction<any, any, any, any> {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: ActionNames.INCREMENT_COUNT})
        }, 1500)

    }
}

export function decrementCount(): Action {
    return {
        type: ActionNames.DECREMENT_COUNT
    }
}

export function countReducer(count = 0, action: Action) {
    switch (action.type) {
        case ActionNames.INCREMENT_COUNT:
            return count = count + 1;
        case ActionNames.DECREMENT_COUNT:
            return count = count - 1;
        default:
            return count;
    }
}
