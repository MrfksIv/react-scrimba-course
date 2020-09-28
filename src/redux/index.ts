import * as redux from 'redux';
import {createStore} from 'redux';
import {countReducer} from './count';


const store = createStore(countReducer);
store.subscribe(() => console.log(store.getState()))

export default store;
