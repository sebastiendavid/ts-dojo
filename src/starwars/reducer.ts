import { createReducer, Handlers } from 'redux-create-reducer';
import { ActionWithPayload } from '../redux';
import { StartWarsState } from './types';

const initialState: StartWarsState = { text: 'The Types Awakens' };

const reducers: Handlers<StartWarsState> = {
  RESET_TEXT: () => initialState,
  UPDATE_TEXT: (state, action: ActionWithPayload) => ({
    ...state,
    text: action.payload,
  }),
};

export default createReducer(initialState, reducers);
