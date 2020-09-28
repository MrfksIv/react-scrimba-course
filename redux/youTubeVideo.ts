import {Action, ActionNames, PayloadAction} from './actions';


export function setYouTubeTitle(title: string): PayloadAction<string> {
    return {
        type: ActionNames.SET_YOUTUBE_TITLE,
        payload: title
    }
}

export function incrementViewCount(): Action {
    return {
        type: ActionNames.INCREMENT_VIEW_COUNT
    }
}

export function upvoteVideo(): Action {
    return {
        type: ActionNames.UPVOTE_VIDEO
    }
}

export function downvoteVideo(): Action {
    return {
        type: ActionNames.DOWNVOTE_VIDEO
    }
}

const initialState = {
    title: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }
}

export function youTubeVideoReducer(youTubeVideo = initialState, action: PayloadAction<string> | Action) {
    switch(action.type) {
        case ActionNames.INCREMENT_VIEW_COUNT:
            return {
                ...youTubeVideo,
                viewCount: youTubeVideo.viewCount + 1
            }
        case ActionNames.SET_YOUTUBE_TITLE:
            return {
                ...youTubeVideo,
                title: (action as PayloadAction<string>).payload

            }
        case ActionNames.UPVOTE_VIDEO:
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    up: youTubeVideo.votes.up + 1
                }
            }
        case ActionNames.DOWNVOTE_VIDEO:
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    down: youTubeVideo.votes.down + 1
                }
            }
        default:
            return youTubeVideo;
    }
}
