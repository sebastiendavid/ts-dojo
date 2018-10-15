import { createReducer, Handlers } from 'redux-create-reducer';
import { ActionWithPayload } from '../redux';
import { RESET_TEXT, UPDATE_TEXT } from './actions';
import { StartWarsState } from './types';

const initialState: StartWarsState = { text: 'The Types Awakens' };

const reducers: Handlers<StartWarsState> = {
  [RESET_TEXT]: () => initialState,
  [UPDATE_TEXT]: (state, action: ActionWithPayload) => ({
    ...state,
    text: action.payload,
  }),
};

export default createReducer(initialState, reducers);
