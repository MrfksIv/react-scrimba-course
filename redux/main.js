"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux = require("redux");
var count_1 = require("./count");
var favoriteThings_1 = require("./favoriteThings");
var youTubeVideo_1 = require("./youTubeVideo");
var rootReducer = redux.combineReducers({
    count: count_1.countReducer,
    favoriteThings: favoriteThings_1.favoriteThingsReducer,
    youTubeVideo: youTubeVideo_1.youTubeVideoReducer,
});
var store = redux.createStore(rootReducer);
store.subscribe(function () {
    console.log(store.getState());
});
store.dispatch(count_1.changeCount(42));
store.dispatch(favoriteThings_1.addFavoriteThing('my favorite thing yo!'));
store.dispatch(favoriteThings_1.addFavoriteThing('my second favorite thing yo!'));
store.dispatch(favoriteThings_1.removeFavoriteThing('my favorite thing yo!'));
store.dispatch(youTubeVideo_1.incrementViewCount());
store.dispatch(youTubeVideo_1.upvoteVideo());
store.dispatch(youTubeVideo_1.incrementViewCount());
store.dispatch(youTubeVideo_1.upvoteVideo());
store.dispatch(youTubeVideo_1.incrementViewCount());
store.dispatch(youTubeVideo_1.upvoteVideo());
store.dispatch(youTubeVideo_1.downvoteVideo());
//# sourceMappingURL=main.js.map