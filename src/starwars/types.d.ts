import { Action } from 'redux';
import { ActionWithPayload } from '../redux';

export interface StarWarsStateProps {
  text: string;
}

export interface StartWarsState extends StarWarsStateProps {}

export interface StarWarsDispatchProps {
  resetText: () => Action;
  updateText: (payload: string) => ActionWithPayload;
}

export interface StarWarsProps
  extends StarWarsStateProps,
    StarWarsDispatchProps {}
