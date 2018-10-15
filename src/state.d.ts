import { Action } from 'redux';
import { StartWarsState } from './starwars/types';

export interface AppState {
  starWars: StartWarsState;
}
