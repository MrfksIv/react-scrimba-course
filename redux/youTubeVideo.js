"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
function setYouTubeTitle(title) {
    return {
        type: actions_1.ActionNames.SET_YOUTUBE_TITLE,
        payload: title
    };
}
exports.setYouTubeTitle = setYouTubeTitle;
function incrementViewCount() {
    return {
        type: actions_1.ActionNames.INCREMENT_VIEW_COUNT
    };
}
exports.incrementViewCount = incrementViewCount;
function upvoteVideo() {
    return {
        type: actions_1.ActionNames.UPVOTE_VIDEO
    };
}
exports.upvoteVideo = upvoteVideo;
function downvoteVideo() {
    return {
        type: actions_1.ActionNames.DOWNVOTE_VIDEO
    };
}
exports.downvoteVideo = downvoteVideo;
var initialState = {
    title: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }
};
function youTubeVideoReducer(youTubeVideo, action) {
    if (youTubeVideo === void 0) { youTubeVideo = initialState; }
    switch (action.type) {
        case actions_1.ActionNames.INCREMENT_VIEW_COUNT:
            return __assign(__assign({}, youTubeVideo), { viewCount: youTubeVideo.viewCount + 1 });
        case actions_1.ActionNames.SET_YOUTUBE_TITLE:
            return __assign(__assign({}, youTubeVideo), { title: action.payload });
        case actions_1.ActionNames.UPVOTE_VIDEO:
            return __assign(__assign({}, youTubeVideo), { votes: __assign(__assign({}, youTubeVideo.votes), { up: youTubeVideo.votes.up + 1 }) });
        case actions_1.ActionNames.DOWNVOTE_VIDEO:
            return __assign(__assign({}, youTubeVideo), { votes: __assign(__assign({}, youTubeVideo.votes), { down: youTubeVideo.votes.down + 1 }) });
        default:
            return youTubeVideo;
    }
}
exports.youTubeVideoReducer = youTubeVideoReducer;
//# sourceMappingURL=youTubeVideo.js.map