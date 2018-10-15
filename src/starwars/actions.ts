import { createAction } from '../utils';

export const RESET_TEXT = 'RESET_TEXT';
export const UPDATE_TEXT = 'UPDATE_TEXT';

export const resetText = createAction(RESET_TEXT);
export const updateText = createAction(UPDATE_TEXT);
