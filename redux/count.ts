import {ActionNames, PayloadAction} from './actions';

export function changeCount(amount = 1): PayloadAction<number> {
    return {
        type: ActionNames.CHANGE_COUNT,
        payload: amount
    }
}


export function countReducer(count = 0, action: PayloadAction<number>) {
    switch(action.type) {
        case ActionNames.CHANGE_COUNT:
            return count + action.payload
        default:
            return count
    }
}
