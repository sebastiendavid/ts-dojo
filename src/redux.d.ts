import { Action } from 'redux';

export interface ActionWithPayload extends Action<string> {
  payload: any;
}
