import {Action, ActionNames} from './actions';


export function incrementCount(): Action {
    return {
        type: ActionNames.INCREMENT_COUNT
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
