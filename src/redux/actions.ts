export enum ActionNames {
    INCREMENT_COUNT = 'INCREMENT.COUNT',
    DECREMENT_COUNT = 'DECREMENT.COUNT',
}

export interface Action {
    type: ActionNames;
}

export interface PayloadAction<T> extends Action {
    payload: T;
}
