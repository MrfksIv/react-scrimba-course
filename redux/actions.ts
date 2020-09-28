
export enum ActionNames {
    CHANGE_COUNT = 'CHANGE.COUNT',
    ADD_FAVORITE_THING = 'ADD.FAVORITE.THING',
    REMOVE_FAVORITE_THING = 'REMOVE.FAVORITE.THING',
    SET_YOUTUBE_TITLE = 'SET.YOUTUBE.TITLE',
    INCREMENT_VIEW_COUNT = 'INCREMENT.VIEW.COUNT',
    UPVOTE_VIDEO = 'UPVOTE.VIDEO',
    DOWNVOTE_VIDEO = 'DOWNVOTE.VIDEO',

}

export interface Action {
    type: ActionNames;
}

export interface PayloadAction<T> extends Action {
    payload: T;
}
