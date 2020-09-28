import {PayloadAction, ActionNames} from './actions';

export function addFavoriteThing(thing: string): PayloadAction<string> {
    return {
        type: ActionNames.ADD_FAVORITE_THING,
        payload: thing
    }
}

export function removeFavoriteThing(thing: string): PayloadAction<string> {
    return {
        type: ActionNames.REMOVE_FAVORITE_THING,
        payload: thing
    }
}

export function favoriteThingsReducer(favoriteThings: string[] =[], action: PayloadAction<string>) {
    switch(action.type) {
        case ActionNames.ADD_FAVORITE_THING:
            return  [...favoriteThings, action.payload]
        case ActionNames.REMOVE_FAVORITE_THING: {
            const updatedArr = favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase());
            return updatedArr;
        }
        default:
            return favoriteThings
    }
}
