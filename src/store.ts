import { combineReducers, createStore, ReducersMapObject } from 'redux';
import starWars from './starwars/reducer';
import { AppState } from './state';

const reducers: ReducersMapObject<AppState> = {
  starWars,
};

export default createStore(combineReducers(reducers));
