import { ActionWithPayload } from './redux';

export const createAction = (type: string) => (
  payload?: any
): ActionWithPayload => {
  const action: ActionWithPayload = { type };
  if (payload !== undefined) {
    action.payload = payload;
  }
  return action;
};
