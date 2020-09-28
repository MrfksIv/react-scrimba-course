import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { countReducer } from './count';


const store = createStore(countReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()))

export default store;
