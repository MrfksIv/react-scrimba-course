
import * as redux from 'redux';
import { changeCount, countReducer } from './count';
import { favoriteThingsReducer, addFavoriteThing, removeFavoriteThing } from './favoriteThings';
import {downvoteVideo, incrementViewCount, upvoteVideo, youTubeVideoReducer} from './youTubeVideo';


const rootReducer = redux.combineReducers({
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer,
})

const store = redux.createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(changeCount(42));
store.dispatch(addFavoriteThing('my favorite thing yo!'));
store.dispatch(addFavoriteThing('my second favorite thing yo!'));
store.dispatch(removeFavoriteThing('my favorite thing yo!'));
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(incrementViewCount());
store.dispatch(upvoteVideo());
store.dispatch(downvoteVideo());




